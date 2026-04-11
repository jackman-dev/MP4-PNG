const stage = document.getElementById("stage");
const stageScroll = document.getElementById("stageScroll");
const videoElement = document.getElementById("videoElement");
const overlayLayer = document.getElementById("overlayLayer");
const videoInput = document.getElementById("videoInput");
const iconInput = document.getElementById("iconInput");
const addIconsButton = document.getElementById("addIconsButton");
const exportButton = document.getElementById("exportButton");
const exportStatus = document.getElementById("exportStatus");
const layerList = document.getElementById("layerList");
const videoMeta = document.getElementById("videoMeta");
const layerItemTemplate = document.getElementById("layerItemTemplate");
const resolutionSelect = document.getElementById("resolutionSelect");
const resolutionHint = document.getElementById("resolutionHint");
const leftMarginInput = document.getElementById("leftMarginInput");
const topMarginInput = document.getElementById("topMarginInput");
const applySpacingButton = document.getElementById("applySpacingButton");
const deleteSelectedButton = document.getElementById("deleteSelectedButton");
const tabButtons = document.querySelectorAll("[data-tab-target]");
const toolScreens = document.querySelectorAll(".tool-screen");
const excelInput = document.getElementById("excelInput");
const excelDownloadButton = document.getElementById("excelDownloadButton");
const excelStatus = document.getElementById("excelStatus");
const excelMeta = document.getElementById("excelMeta");
const excelPreview = document.getElementById("excelPreview");

const SIZE_PRESETS = [0.8, 1, 1.35, 1.7];
const DEFAULT_SIZE_LEVEL = 4;
const DEFAULT_VERTICAL_GAP = 20;
const DEFAULT_MAX_ICON_SIZE = 96;
const MAX_SAFE_EXPORT_PIXELS = 1920 * 1080;
const EXPORT_FPS = 24;
const state = {
  videoUrl: "",
  videoWidth: 640,
  videoHeight: 360,
  icons: [],
  selectedIconId: null,
  leftMargin: 50,
  topMargin: 50,
};
const excelState = {
  fileName: "",
  data: null,
};

let dragState = null;

videoInput.addEventListener("change", handleVideoUpload);
iconInput.addEventListener("change", handleIconUpload);
addIconsButton.addEventListener("click", () => iconInput.click());
exportButton.addEventListener("click", exportComposition);
resolutionSelect.addEventListener("change", updateResolutionHint);
applySpacingButton.addEventListener("click", applySpacingSettings);
deleteSelectedButton.addEventListener("click", removeSelectedIcon);
document.addEventListener("keydown", handleSelectedIconDeleteShortcut);
tabButtons.forEach((button) => {
  button.addEventListener("click", () => switchTab(button.dataset.tabTarget));
});
excelInput?.addEventListener("change", handleExcelUpload);
excelDownloadButton?.addEventListener("click", downloadExcelJson);

renderIcons();
renderLayerList();
updateResolutionHint();
updateSelectedDeleteButton();
updateExcelDownloadAvailability();

function handleVideoUpload(event) {
  const [file] = event.target.files ?? [];
  if (!file) {
    return;
  }

  if (state.videoUrl) {
    URL.revokeObjectURL(state.videoUrl);
  }

  state.videoUrl = URL.createObjectURL(file);
  videoElement.src = state.videoUrl;
  videoElement.load();

  videoElement.onloadedmetadata = () => {
    state.videoWidth = videoElement.videoWidth;
    state.videoHeight = videoElement.videoHeight;
    stage.style.width = `${state.videoWidth}px`;
    stage.style.height = `${state.videoHeight}px`;
    videoMeta.textContent = `${file.name} · ${state.videoWidth} x ${state.videoHeight}px`;
    exportStatus.textContent =
      "아이콘 위치를 조정한 뒤 작업 영상을 다운로드할 수 있습니다. 큰 영상은 자동으로 안전한 출력 크기로 조정될 수 있습니다.";
    updateResolutionHint();
    updateExportAvailability();
    stageScroll.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };
}

async function handleIconUpload(event) {
  const files = Array.from(event.target.files ?? []);
  if (!files.length) {
    return;
  }

  let nextTop = getNextAvailableTop();

  for (const file of files) {
    const iconUrl = URL.createObjectURL(file);
    const { naturalWidth, naturalHeight } = await loadImageDimensions(iconUrl);
    const { width, height } = getDimensionsForLevel(
      naturalWidth,
      naturalHeight,
      DEFAULT_SIZE_LEVEL
    );
    const icon = {
      id: crypto.randomUUID(),
      name: file.name,
      url: iconUrl,
      x: state.leftMargin,
      y: nextTop,
      sizeLevel: DEFAULT_SIZE_LEVEL,
      width,
      height,
      naturalWidth,
      naturalHeight,
    };

    state.icons.push(icon);
    nextTop += icon.height + DEFAULT_VERTICAL_GAP;
  }

  iconInput.value = "";
  renderIcons();
  renderLayerList();
  updateExportAvailability();
}

function getNextAvailableTop() {
  if (!state.icons.length) {
    return state.topMargin;
  }

  const bottom = state.icons.reduce(
    (maxBottom, icon) => Math.max(maxBottom, icon.y + icon.height),
    state.topMargin
  );

  return bottom + DEFAULT_VERTICAL_GAP;
}

function renderIcons() {
  overlayLayer.innerHTML = "";

  state.icons.forEach((icon) => {
    const button = document.createElement("div");
    button.className = "overlay-item";
    if (icon.id === state.selectedIconId) {
      button.classList.add("selected");
    }
    button.style.left = `${icon.x}px`;
    button.style.top = `${icon.y}px`;
    button.style.width = `${icon.width}px`;
    button.style.height = `${icon.height}px`;
    button.dataset.iconId = icon.id;

    const image = document.createElement("img");
    image.src = icon.url;
    image.alt = icon.name;
    button.appendChild(image);

    const removeButton = document.createElement("button");
    removeButton.type = "button";
    removeButton.className = "overlay-delete-button";
    removeButton.setAttribute("aria-label", `${icon.name} 삭제`);
    removeButton.textContent = "x";
    removeButton.addEventListener("click", (event) => {
      event.stopPropagation();
      removeIcon(icon.id);
    });
    button.appendChild(removeButton);

    button.addEventListener("pointerdown", startIconDrag);
    button.addEventListener("click", () => {
      state.selectedIconId = icon.id;
      renderIcons();
      renderLayerList();
    });

    overlayLayer.appendChild(button);
  });

  updateSelectedDeleteButton();
}

function renderLayerList() {
  layerList.innerHTML = "";

  if (!state.icons.length) {
    layerList.innerHTML =
      '<p class="empty-state">PNG 아이콘을 업로드하면 여기서 크기를 조절할 수 있습니다.</p>';
    return;
  }

  state.icons.forEach((icon, index) => {
    const fragment = layerItemTemplate.content.cloneNode(true);
    const item = fragment.querySelector(".layer-item");
    const name = fragment.querySelector(".layer-name");
    const sizeRange = fragment.querySelector(".size-range");
    const sizeMeta = fragment.querySelector(".size-meta");
    const deleteButton = fragment.querySelector(".delete-button");

    if (icon.id === state.selectedIconId) {
      item.classList.add("selected");
    }

    name.textContent = `${index + 1}. ${icon.name}`;
    sizeRange.value = String(icon.sizeLevel);
    sizeMeta.textContent = `현재 단계 ${icon.sizeLevel} · ${icon.width} x ${icon.height}px`;
    sizeRange.addEventListener("input", (event) => {
      resizeIcon(icon.id, Number(event.target.value));
    });

    deleteButton.addEventListener("click", () => {
      removeIcon(icon.id);
    });

    item.addEventListener("click", () => {
      state.selectedIconId = icon.id;
      renderIcons();
      renderLayerList();
    });

    layerList.appendChild(fragment);
  });

  updateSelectedDeleteButton();
}

function resizeIcon(iconId, level) {
  const icon = state.icons.find((entry) => entry.id === iconId);
  if (!icon) {
    return;
  }

  const normalizedLevel = clamp(level, 1, SIZE_PRESETS.length);
  const { width, height } = getDimensionsForLevel(
    icon.naturalWidth,
    icon.naturalHeight,
    normalizedLevel
  );
  icon.sizeLevel = normalizedLevel;
  icon.width = width;
  icon.height = height;
  keepIconInsideStage(icon);
  maintainVerticalSpacing(icon.id);
  renderIcons();
  renderLayerList();
}

function removeIcon(iconId) {
  const iconIndex = state.icons.findIndex((entry) => entry.id === iconId);
  if (iconIndex === -1) {
    return;
  }

  const [removed] = state.icons.splice(iconIndex, 1);
  URL.revokeObjectURL(removed.url);

  if (state.selectedIconId === iconId) {
    state.selectedIconId = state.icons[0]?.id ?? null;
  }

  renderIcons();
  renderLayerList();
  updateExportAvailability();
}

function removeSelectedIcon() {
  if (!state.selectedIconId) {
    return;
  }

  removeIcon(state.selectedIconId);
}

function handleSelectedIconDeleteShortcut(event) {
  if (!state.selectedIconId) {
    return;
  }

  const target = event.target;
  const isTypingField =
    target instanceof HTMLElement &&
    (target.tagName === "INPUT" ||
      target.tagName === "TEXTAREA" ||
      target.tagName === "SELECT" ||
      target.isContentEditable);

  if (isTypingField) {
    return;
  }

  if (event.key === "Delete" || event.key === "Backspace") {
    event.preventDefault();
    removeSelectedIcon();
  }
}

function updateSelectedDeleteButton() {
  const selectedIcon = state.icons.find((icon) => icon.id === state.selectedIconId);
  deleteSelectedButton.disabled = !selectedIcon;
  deleteSelectedButton.textContent = selectedIcon
    ? `선택 아이콘 삭제 (${selectedIcon.name})`
    : "선택 아이콘 삭제";
}

function switchTab(targetId) {
  tabButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.tabTarget === targetId);
  });

  toolScreens.forEach((screen) => {
    screen.classList.toggle("is-active", screen.id === targetId);
  });
}

function startIconDrag(event) {
  if (event.target instanceof HTMLElement && event.target.closest(".overlay-delete-button")) {
    return;
  }

  const iconId = event.currentTarget.dataset.iconId;
  const icon = state.icons.find((entry) => entry.id === iconId);
  if (!icon) {
    return;
  }

  const rect = stage.getBoundingClientRect();
  dragState = {
    iconId,
    offsetX: event.clientX - rect.left - icon.x,
    offsetY: event.clientY - rect.top - icon.y,
  };
  state.selectedIconId = iconId;

  event.currentTarget.classList.add("dragging");
  event.currentTarget.setPointerCapture(event.pointerId);
  event.currentTarget.addEventListener("pointermove", onIconDrag);
  event.currentTarget.addEventListener("pointerup", stopIconDrag);
  event.currentTarget.addEventListener("pointercancel", stopIconDrag);
  renderLayerList();
}

function onIconDrag(event) {
  if (!dragState) {
    return;
  }

  const icon = state.icons.find((entry) => entry.id === dragState.iconId);
  if (!icon) {
    return;
  }

  const rect = stage.getBoundingClientRect();
  icon.x = event.clientX - rect.left - dragState.offsetX;
  icon.y = event.clientY - rect.top - dragState.offsetY;
  keepIconInsideStage(icon);
  renderIcons();
}

function stopIconDrag(event) {
  event.currentTarget.classList.remove("dragging");
  event.currentTarget.releasePointerCapture(event.pointerId);
  event.currentTarget.removeEventListener("pointermove", onIconDrag);
  event.currentTarget.removeEventListener("pointerup", stopIconDrag);
  event.currentTarget.removeEventListener("pointercancel", stopIconDrag);
  dragState = null;
}

function keepIconInsideStage(icon) {
  icon.x = clamp(icon.x, 0, Math.max(0, state.videoWidth - icon.width));
  icon.y = clamp(icon.y, 0, Math.max(0, state.videoHeight - icon.height));
}

function maintainVerticalSpacing(changedIconId) {
  if (state.icons.length <= 1) {
    return;
  }

  const sortedIcons = [...state.icons].sort((a, b) => a.y - b.y);
  const changedIndex = sortedIcons.findIndex((icon) => icon.id === changedIconId);

  if (changedIndex === -1) {
    return;
  }

  for (let index = changedIndex + 1; index < sortedIcons.length; index += 1) {
    const previousIcon = sortedIcons[index - 1];
    const currentIcon = sortedIcons[index];
    const minTop = previousIcon.y + previousIcon.height + DEFAULT_VERTICAL_GAP;

    if (currentIcon.y < minTop) {
      currentIcon.y = minTop;
      keepIconInsideStage(currentIcon);
    }
  }
}

function updateExportAvailability() {
  exportButton.disabled = !(state.videoUrl && state.icons.length);
}

function updateExcelDownloadAvailability() {
  if (excelDownloadButton) {
    excelDownloadButton.disabled = !excelState.data;
  }
}

function applySpacingSettings() {
  state.leftMargin = Math.max(0, Number(leftMarginInput.value) || 0);
  state.topMargin = Math.max(0, Number(topMarginInput.value) || 0);

  let currentY = state.topMargin;
  const sortedIcons = [...state.icons].sort((a, b) => a.y - b.y);

  sortedIcons.forEach((icon) => {
    icon.x = state.leftMargin;
    icon.y = currentY;
    keepIconInsideStage(icon);
    currentY = icon.y + icon.height + DEFAULT_VERTICAL_GAP;
  });

  renderIcons();
  renderLayerList();
}

async function exportComposition() {
  if (!state.videoUrl || !state.icons.length) {
    return;
  }

  exportButton.disabled = true;
  exportStatus.textContent =
    "영상을 렌더링 중입니다. 안정성을 위해 안전한 출력 크기를 자동 적용할 수 있습니다.";

  try {
    const exportSettings = getSafeExportSettings(Number(resolutionSelect.value));
    const { outputScale, outputWidth, outputHeight, capped } = exportSettings;
    const canvas = document.createElement("canvas");
    canvas.width = outputWidth;
    canvas.height = outputHeight;
    const context = canvas.getContext("2d", { alpha: false });

    if (!context) {
      throw new Error("canvas-init");
    }

    context.imageSmoothingEnabled = true;
    context.imageSmoothingQuality = "high";

    const iconBitmaps = await loadIconBitmaps();
    const stream = canvas.captureStream(EXPORT_FPS);
    const mimeType = getSupportedMimeType();

    if (!mimeType) {
      throw new Error("unsupported-export");
    }

    const chunks = [];
    const recorder = new MediaRecorder(stream, {
      mimeType,
      videoBitsPerSecond: 6_000_000,
    });

    recorder.ondataavailable = (event) => {
      if (event.data.size > 0) {
        chunks.push(event.data);
      }
    };

    const exportVideo = document.createElement("video");
    exportVideo.src = state.videoUrl;
    exportVideo.muted = true;
    exportVideo.playsInline = true;
    exportVideo.preload = "auto";
    exportVideo.crossOrigin = "anonymous";

    await waitForVideoReady(exportVideo);
    exportVideo.currentTime = 0;

    const finished = new Promise((resolve) => {
      recorder.onstop = resolve;
    });

    recorder.start(1000);
    await exportVideo.play();
    await drawFrames(exportVideo, context, iconBitmaps, outputScale);
    recorder.stop();
    await finished;
    exportVideo.pause();
    exportVideo.removeAttribute("src");
    exportVideo.load();

    const extension = mimeType.includes("mp4") ? "mp4" : "webm";
    const blob = new Blob(chunks, { type: mimeType });
    const downloadUrl = URL.createObjectURL(blob);
    const anchor = document.createElement("a");
    anchor.href = downloadUrl;
    anchor.download = `video-overlay-export.${extension}`;
    anchor.click();
    setTimeout(() => URL.revokeObjectURL(downloadUrl), 1000);

    exportStatus.textContent =
      extension === "mp4"
        ? `MP4 다운로드가 시작되었습니다. (${outputWidth} x ${outputHeight})${capped ? " · 안정성을 위해 출력 크기를 자동 조정했습니다." : ""}`
        : `브라우저 지원 형식으로 다운로드를 시작했습니다. 현재 브라우저에서는 MP4 대신 WEBM으로 저장됩니다. (${outputWidth} x ${outputHeight})${capped ? " · 안정성을 위해 출력 크기를 자동 조정했습니다." : ""}`;
  } catch (error) {
    if (error instanceof Error && error.message === "unsupported-export") {
      exportStatus.textContent = "이 브라우저는 영상 내보내기를 지원하지 않습니다.";
    } else if (error instanceof Error && error.message === "canvas-init") {
      exportStatus.textContent = "캔버스 초기화에 실패했습니다.";
    } else {
      exportStatus.textContent =
        "영상 렌더링 중 오류가 발생했습니다. 더 작은 영상이나 원본 해상도로 다시 시도해 주세요.";
    }
  } finally {
    updateExportAvailability();
  }
}

async function drawFrames(video, context, iconBitmaps, outputScale) {
  return new Promise((resolve, reject) => {
    let done = false;

    const finish = () => {
      if (done) {
        return;
      }
      done = true;
      resolve();
    };

    const step = () => {
      if (done) {
        return;
      }

      if (video.ended) {
        drawCurrentFrame(video, context, iconBitmaps, outputScale);
        finish();
        return;
      }

      drawCurrentFrame(video, context, iconBitmaps, outputScale);

      if ("requestVideoFrameCallback" in video) {
        video.requestVideoFrameCallback(step);
      } else {
        requestAnimationFrame(step);
      }
    };

    video.onended = () => finish();
    video.onerror = () => reject(new Error("Video render failed."));

    if ("requestVideoFrameCallback" in video) {
      video.requestVideoFrameCallback(step);
    } else {
      requestAnimationFrame(step);
    }
  });
}

function waitForVideoReady(video) {
  return new Promise((resolve, reject) => {
    const onLoaded = () => {
      cleanup();
      resolve();
    };

    const onError = () => {
      cleanup();
      reject(new Error("Video failed to load."));
    };

    const cleanup = () => {
      video.removeEventListener("loadedmetadata", onLoaded);
      video.removeEventListener("error", onError);
    };

    if (video.readyState >= 1) {
      resolve();
      return;
    }

    video.addEventListener("loadedmetadata", onLoaded, { once: true });
    video.addEventListener("error", onError, { once: true });
  });
}

function drawCurrentFrame(video, context, iconBitmaps, outputScale) {
  const outputWidth = Math.round(state.videoWidth * outputScale);
  const outputHeight = Math.round(state.videoHeight * outputScale);
  context.clearRect(0, 0, outputWidth, outputHeight);
  context.drawImage(video, 0, 0, outputWidth, outputHeight);

  state.icons.forEach((icon) => {
    const image = iconBitmaps.get(icon.id);
    if (!image) {
      return;
    }
    context.drawImage(
      image,
      Math.round(icon.x * outputScale),
      Math.round(icon.y * outputScale),
      Math.round(icon.width * outputScale),
      Math.round(icon.height * outputScale)
    );
  });
}

async function loadIconBitmaps() {
  const entries = await Promise.all(
    state.icons.map(async (icon) => {
      const image = new Image();
      image.src = icon.url;
      image.crossOrigin = "anonymous";
      await image.decode();
      return [icon.id, image];
    })
  );

  return new Map(entries);
}

function getSupportedMimeType() {
  const candidates = [
    "video/mp4;codecs=avc1.42E01E,mp4a.40.2",
    "video/mp4",
    "video/webm;codecs=vp9,opus",
    "video/webm;codecs=vp8,opus",
    "video/webm",
  ];

  return candidates.find((mimeType) => MediaRecorder.isTypeSupported(mimeType)) ?? "";
}

function getDimensionsForLevel(naturalWidth, naturalHeight, level) {
  const scale = SIZE_PRESETS[level - 1];
  const maxSide = DEFAULT_MAX_ICON_SIZE * scale;

  if (!naturalWidth || !naturalHeight) {
    return { width: maxSide, height: maxSide };
  }

  if (naturalWidth >= naturalHeight) {
    return {
      width: Math.round(maxSide),
      height: Math.round((naturalHeight / naturalWidth) * maxSide),
    };
  }

  return {
    width: Math.round((naturalWidth / naturalHeight) * maxSide),
    height: Math.round(maxSide),
  };
}

function loadImageDimensions(url) {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.onload = () => {
      resolve({
        naturalWidth: image.naturalWidth,
        naturalHeight: image.naturalHeight,
      });
    };
    image.onerror = () => reject(new Error("Image failed to load."));
    image.src = url;
  });
}

function updateResolutionHint() {
  const requestedScale = Number(resolutionSelect.value);
  const { outputScale, outputWidth, outputHeight, capped } = getSafeExportSettings(
    requestedScale
  );
  const scaleLabel = requestedScale === 1 ? "원본" : `${requestedScale}배`;
  const appliedLabel =
    outputScale === 1 ? "원본" : `${outputScale.toFixed(2).replace(/\.00$/, "")}배`;
  resolutionHint.textContent = capped
    ? `${scaleLabel} 요청은 너무 커서 ${appliedLabel} (${outputWidth} x ${outputHeight}px)로 자동 조정됩니다.`
    : `${scaleLabel} 출력 예정: ${outputWidth} x ${outputHeight}px. 업스케일은 픽셀 크기만 키웁니다.`;
}

async function handleExcelUpload(event) {
  const [file] = event.target.files ?? [];
  if (!file) {
    return;
  }

  if (!window.XLSX) {
    excelStatus.textContent =
      "엑셀 변환 라이브러리를 불러오지 못했습니다. 인터넷 연결 후 다시 시도해 주세요.";
    return;
  }

  try {
    const buffer = await file.arrayBuffer();
    const workbook = window.XLSX.read(buffer, { type: "array" });
    const jsonBySheet = {};

    workbook.SheetNames.forEach((sheetName) => {
      const sheet = workbook.Sheets[sheetName];
      jsonBySheet[sheetName] = window.XLSX.utils.sheet_to_json(sheet, {
        defval: null,
      });
    });

    excelState.fileName = file.name;
    excelState.data = jsonBySheet;
    excelMeta.textContent = `${file.name} · ${workbook.SheetNames.length}개 시트`;
    excelPreview.textContent = JSON.stringify(jsonBySheet, null, 2).slice(0, 12000);
    excelStatus.textContent = "엑셀 파일을 JSON으로 변환했습니다. 다운로드할 수 있습니다.";
  } catch (error) {
    excelState.fileName = "";
    excelState.data = null;
    excelMeta.textContent = "첫 번째 시트의 변환 결과 일부가 여기에 표시됩니다.";
    excelPreview.textContent = "엑셀 파일 변환에 실패했습니다.";
    excelStatus.textContent =
      "엑셀 파일을 읽는 중 오류가 발생했습니다. 파일 형식을 다시 확인해 주세요.";
  } finally {
    updateExcelDownloadAvailability();
  }
}

function downloadExcelJson() {
  if (!excelState.data) {
    return;
  }

  const baseName = excelState.fileName.replace(/\.[^.]+$/, "") || "excel-data";
  const blob = new Blob([JSON.stringify(excelState.data, null, 2)], {
    type: "application/json",
  });
  const downloadUrl = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  anchor.href = downloadUrl;
  anchor.download = `${baseName}.json`;
  anchor.click();
  setTimeout(() => URL.revokeObjectURL(downloadUrl), 1000);
}

function getSafeExportSettings(requestedScale) {
  const safeRequestedScale =
    Number.isFinite(requestedScale) && requestedScale > 0 ? requestedScale : 1;
  const requestedWidth = Math.round(state.videoWidth * safeRequestedScale);
  const requestedHeight = Math.round(state.videoHeight * safeRequestedScale);
  const requestedPixels = requestedWidth * requestedHeight;

  if (requestedPixels <= MAX_SAFE_EXPORT_PIXELS) {
    return {
      outputScale: safeRequestedScale,
      outputWidth: requestedWidth,
      outputHeight: requestedHeight,
      capped: false,
    };
  }

  const safeScale = Math.sqrt(
    MAX_SAFE_EXPORT_PIXELS / Math.max(state.videoWidth * state.videoHeight, 1)
  );
  const outputScale = Math.max(Math.min(safeRequestedScale, safeScale), 0.5);

  return {
    outputScale,
    outputWidth: Math.round(state.videoWidth * outputScale),
    outputHeight: Math.round(state.videoHeight * outputScale),
    capped: outputScale < safeRequestedScale,
  };
}

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}
