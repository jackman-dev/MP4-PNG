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
const hotspotBackgroundInput = document.getElementById("hotspotBackgroundInput");
const hotspotMobileBackgroundInput = document.getElementById("hotspotMobileBackgroundInput");
const addHotspotSectionButton = document.getElementById("addHotspotSectionButton");
const deleteHotspotSectionButton = document.getElementById("deleteHotspotSectionButton");
const hotspotSectionList = document.getElementById("hotspotSectionList");
const addHotspotButton = document.getElementById("addHotspotButton");
const hotspotLabelInput = document.getElementById("hotspotLabelInput");
const hotspotProductNameInput = document.getElementById("hotspotProductNameInput");
const hotspotDiscountInput = document.getElementById("hotspotDiscountInput");
const hotspotPriceInput = document.getElementById("hotspotPriceInput");
const hotspotLinkInput = document.getElementById("hotspotLinkInput");
const hotspotMobileLinkInput = document.getElementById("hotspotMobileLinkInput");
const hotspotBorderColorInput = document.getElementById("hotspotBorderColorInput");
const hotspotBackgroundColorInput = document.getElementById("hotspotBackgroundColorInput");
const hotspotPlusColorInput = document.getElementById("hotspotPlusColorInput");
const hotspotDesktopTooltipPositionInput = document.getElementById(
  "hotspotDesktopTooltipPositionInput"
);
const hotspotMobileTooltipPositionInput = document.getElementById(
  "hotspotMobileTooltipPositionInput"
);
const hotspotPreviewInput = document.getElementById("hotspotPreviewInput");
const deleteHotspotButton = document.getElementById("deleteHotspotButton");
const hotspotStatus = document.getElementById("hotspotStatus");
const hotspotMeta = document.getElementById("hotspotMeta");
const hotspotDesktopStage = document.getElementById("hotspotDesktopStage");
const hotspotDesktopBackgroundImage = document.getElementById("hotspotDesktopBackgroundImage");
const hotspotDesktopLayer = document.getElementById("hotspotDesktopLayer");
const hotspotMobileStage = document.getElementById("hotspotMobileStage");
const hotspotMobileBackgroundImage = document.getElementById("hotspotMobileBackgroundImage");
const hotspotMobileLayer = document.getElementById("hotspotMobileLayer");
const downloadHotspotDesktopHtmlButton = document.getElementById(
  "downloadHotspotDesktopHtmlButton"
);
const downloadHotspotDesktopCssButton = document.getElementById(
  "downloadHotspotDesktopCssButton"
);
const downloadHotspotDesktopJsButton = document.getElementById(
  "downloadHotspotDesktopJsButton"
);
const downloadHotspotMobileHtmlButton = document.getElementById(
  "downloadHotspotMobileHtmlButton"
);
const downloadHotspotMobileCssButton = document.getElementById(
  "downloadHotspotMobileCssButton"
);
const downloadHotspotMobileJsButton = document.getElementById(
  "downloadHotspotMobileJsButton"
);
const downloadHotspotZipButton = document.getElementById("downloadHotspotZipButton");

const SIZE_PRESETS = [0.8, 1, 1.35, 1.7];
const DEFAULT_SIZE_LEVEL = 4;
const DEFAULT_VERTICAL_GAP = 20;
const DEFAULT_MAX_ICON_SIZE = 96;
const MAX_SAFE_EXPORT_PIXELS = 1920 * 1080;
const EXPORT_FPS = 24;
const MAX_DESKTOP_EDITOR_WIDTH = 1000;
const MAX_DESKTOP_EXPORT_WIDTH = 1440;
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
const hotspotState = {
  sections: [],
  selectedSectionId: null,
};

let dragState = null;
let hotspotDragState = null;

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
hotspotBackgroundInput?.addEventListener("change", handleHotspotBackgroundUpload);
hotspotMobileBackgroundInput?.addEventListener("change", handleHotspotMobileBackgroundUpload);
addHotspotSectionButton?.addEventListener("click", addHotspotSection);
deleteHotspotSectionButton?.addEventListener("click", deleteHotspotSection);
hotspotSectionList?.addEventListener("click", handleHotspotSectionListClick);
addHotspotButton?.addEventListener("click", addHotspot);
hotspotLabelInput?.addEventListener("input", updateSelectedHotspotLabel);
hotspotProductNameInput?.addEventListener("input", updateSelectedHotspotProductName);
hotspotDiscountInput?.addEventListener("input", updateSelectedHotspotDiscount);
hotspotPriceInput?.addEventListener("input", updateSelectedHotspotPrice);
hotspotLinkInput?.addEventListener("input", updateSelectedHotspotLink);
hotspotMobileLinkInput?.addEventListener("input", updateSelectedHotspotMobileLink);
hotspotBorderColorInput?.addEventListener("input", updateSelectedHotspotStyle);
hotspotBackgroundColorInput?.addEventListener("input", updateSelectedHotspotStyle);
hotspotPlusColorInput?.addEventListener("input", updateSelectedHotspotStyle);
hotspotDesktopTooltipPositionInput?.addEventListener("change", updateSelectedHotspotStyle);
hotspotMobileTooltipPositionInput?.addEventListener("change", updateSelectedHotspotStyle);
hotspotPreviewInput?.addEventListener("change", handleSelectedHotspotPreviewUpload);
deleteHotspotButton?.addEventListener("click", deleteSelectedHotspot);
downloadHotspotDesktopHtmlButton?.addEventListener("click", () =>
  downloadHotspotAsset("desktop", "html")
);
downloadHotspotDesktopCssButton?.addEventListener("click", () =>
  downloadHotspotAsset("desktop", "css")
);
downloadHotspotDesktopJsButton?.addEventListener("click", () =>
  downloadHotspotAsset("desktop", "js")
);
downloadHotspotMobileHtmlButton?.addEventListener("click", () =>
  downloadHotspotAsset("mobile", "html")
);
downloadHotspotMobileCssButton?.addEventListener("click", () =>
  downloadHotspotAsset("mobile", "css")
);
downloadHotspotMobileJsButton?.addEventListener("click", () =>
  downloadHotspotAsset("mobile", "js")
);
downloadHotspotZipButton?.addEventListener("click", downloadHotspotZip);

renderIcons();
renderLayerList();
updateResolutionHint();
updateSelectedDeleteButton();
updateExcelDownloadAvailability();
initializeHotspotSections();
updateHotspotControls();
syncHotspotStages();
renderHotspots();

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

function createEmptyHotspotSection(index = hotspotState.sections.length + 1) {
  return {
    id: crypto.randomUUID(),
    name: `섹션 ${index}`,
    desktopBackgroundName: "",
    desktopBackgroundDataUrl: "",
    desktopWidth: 960,
    desktopHeight: 640,
    desktopDisplayWidth: 960,
    desktopDisplayHeight: 640,
    mobileBackgroundName: "",
    mobileBackgroundDataUrl: "",
    mobileWidth: 360,
    mobileHeight: 640,
    items: [],
    selectedId: null,
  };
}

function initializeHotspotSections() {
  if (hotspotState.sections.length) {
    return;
  }
  const firstSection = createEmptyHotspotSection(1);
  hotspotState.sections.push(firstSection);
  hotspotState.selectedSectionId = firstSection.id;
  renderHotspotSectionList();
}

function getCurrentHotspotSection() {
  return (
    hotspotState.sections.find((section) => section.id === hotspotState.selectedSectionId) ??
    hotspotState.sections[0] ??
    null
  );
}

function addHotspotSection() {
  const section = createEmptyHotspotSection();
  hotspotState.sections.push(section);
  hotspotState.selectedSectionId = section.id;
  hotspotStatus.textContent = "새 섹션이 추가되었습니다. 배경 이미지를 등록해 주세요.";
  renderHotspotSectionList();
  updateHotspotControls();
  syncHotspotStages();
  renderHotspots();
}

function deleteHotspotSection() {
  if (hotspotState.sections.length <= 1) {
    hotspotStatus.textContent = "최소 한 개의 섹션은 유지되어야 합니다.";
    return;
  }

  const currentIndex = hotspotState.sections.findIndex(
    (section) => section.id === hotspotState.selectedSectionId
  );
  if (currentIndex === -1) {
    return;
  }

  hotspotState.sections.splice(currentIndex, 1);
  const nextSection = hotspotState.sections[currentIndex] || hotspotState.sections[currentIndex - 1];
  hotspotState.selectedSectionId = nextSection?.id ?? hotspotState.sections[0]?.id ?? null;
  hotspotStatus.textContent = "선택된 섹션을 삭제했습니다.";
  renderHotspotSectionList();
  updateHotspotControls();
  syncHotspotStages();
  renderHotspots();
}

function handleHotspotSectionListClick(event) {
  const button = event.target instanceof HTMLElement
    ? event.target.closest(".section-item")
    : null;

  if (!(button instanceof HTMLButtonElement)) {
    return;
  }

  const { sectionId } = button.dataset;
  if (!sectionId) {
    return;
  }

  selectHotspotSection(sectionId);
}

function selectHotspotSection(sectionId) {
  if (!hotspotState.sections.some((section) => section.id === sectionId)) {
    return;
  }

  hotspotState.selectedSectionId = sectionId;
  renderHotspotSectionList();
  updateHotspotControls();
  syncHotspotStages();
  renderHotspots();
}

function renderHotspotSectionList() {
  if (!hotspotSectionList) {
    return;
  }

  hotspotSectionList.innerHTML = "";

  hotspotState.sections.forEach((section, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "section-item";
    button.dataset.sectionId = section.id;
    if (section.id === hotspotState.selectedSectionId) {
      button.classList.add("is-active");
    }

    const desktopReady = section.desktopBackgroundDataUrl ? "PC 배경 있음" : "PC 배경 없음";
    const mobileReady = section.mobileBackgroundDataUrl ? "Mobile 배경 있음" : "Mobile 배경 없음";
    button.innerHTML = `<strong>${escapeHtml(section.name || `섹션 ${index + 1}`)}</strong><span>${desktopReady} · ${mobileReady} · 핫스팟 ${section.items.length}개</span>`;
    hotspotSectionList.appendChild(button);
  });
}

function handleHotspotBackgroundUpload(event) {
  const section = getCurrentHotspotSection();
  const [file] = event.target.files ?? [];
  if (!file || !section) {
    return;
  }
  const sectionId = section.id;
  section.desktopBackgroundName = file.name;

  const reader = new FileReader();
  reader.onload = async () => {
    const currentSection = hotspotState.sections.find((entry) => entry.id === sectionId);
    if (!currentSection) {
      return;
    }

    currentSection.desktopBackgroundDataUrl = String(reader.result || "");
    const { naturalWidth, naturalHeight } = await loadImageDimensions(
      currentSection.desktopBackgroundDataUrl
    );
    const exportScale = Math.min(1, MAX_DESKTOP_EXPORT_WIDTH / naturalWidth);
    currentSection.desktopWidth = Math.round(naturalWidth * exportScale);
    currentSection.desktopHeight = Math.round(naturalHeight * exportScale);
    const displayScale = Math.min(1, MAX_DESKTOP_EDITOR_WIDTH / currentSection.desktopWidth);
    currentSection.desktopDisplayWidth = Math.round(currentSection.desktopWidth * displayScale);
    currentSection.desktopDisplayHeight = Math.round(currentSection.desktopHeight * displayScale);
    renderHotspotSectionList();
    syncHotspotStages();
    hotspotStatus.textContent =
      "PC 배경 이미지는 미리보기 최대 1000px, 실제 좌표 기준 최대 1440px로 맞춰집니다.";
    updateHotspotControls();
    renderHotspots();
    event.target.value = "";
  };
  reader.readAsDataURL(file);
}

function handleHotspotMobileBackgroundUpload(event) {
  const section = getCurrentHotspotSection();
  const [file] = event.target.files ?? [];
  if (!file || !section) {
    return;
  }
  const sectionId = section.id;
  section.mobileBackgroundName = file.name;

  const reader = new FileReader();
  reader.onload = async () => {
    const currentSection = hotspotState.sections.find((entry) => entry.id === sectionId);
    if (!currentSection) {
      return;
    }

    currentSection.mobileBackgroundDataUrl = String(reader.result || "");
    const { naturalWidth, naturalHeight } = await loadImageDimensions(
      currentSection.mobileBackgroundDataUrl
    );
    currentSection.mobileWidth = 360;
    currentSection.mobileHeight = Math.round((naturalHeight / naturalWidth) * 360);
    renderHotspotSectionList();
    syncHotspotStages();
    hotspotStatus.textContent =
      "모바일 배경 이미지가 준비되었습니다. 우측 모바일 영역은 360px 기준으로 표시됩니다.";
    updateHotspotControls();
    renderHotspots();
    event.target.value = "";
  };
  reader.readAsDataURL(file);
}

function addHotspot() {
  const section = getCurrentHotspotSection();
  if (!section?.desktopBackgroundDataUrl) {
    return;
  }

  const item = {
    id: crypto.randomUUID(),
    label: `상품 ${section.items.length + 1}`,
    productName: "상품명",
    discountText: "35%",
    priceText: "96,850",
    x: Math.round(section.desktopWidth / 2),
    y: Math.round(section.desktopHeight / 2),
    mobileXPct: 50,
    mobileYPct: 50,
    linkUrl: "",
    mobileLinkUrl: "",
    borderColor: "#ffffff",
    backgroundColor: "#ffffff",
    plusColor: "#000000",
    desktopTooltipPosition: "right",
    mobileTooltipPosition: "right",
    previewName: "",
    previewUrl: "",
    previewDataUrl: "",
  };

  section.items.push(item);
  section.selectedId = item.id;
  hotspotStatus.textContent =
    "핫스팟이 추가되었습니다. 드래그로 위치를 조정하고 hover 이미지를 등록하세요.";
  renderHotspotSectionList();
  renderHotspots();
  updateHotspotControls();
}

function renderHotspots() {
  const section = getCurrentHotspotSection();
  if (!hotspotDesktopLayer || !hotspotMobileLayer) {
    return;
  }
  hotspotDesktopLayer.innerHTML = "";
  hotspotMobileLayer.innerHTML = "";

  section?.items.forEach((item) => {
    hotspotDesktopLayer.appendChild(createHotspotPoint(item, "desktop"));
    hotspotMobileLayer.appendChild(createHotspotPoint(item, "mobile"));
  });
}

function updateHotspotControls() {
  const section = getCurrentHotspotSection();
  const hasBackground = Boolean(section?.desktopBackgroundDataUrl);
  const selected = section?.items.find((item) => item.id === section.selectedId) ?? null;

  addHotspotButton.disabled = !hasBackground;
  deleteHotspotButton.disabled = !selected;
  hotspotLabelInput.disabled = !selected;
  hotspotProductNameInput.disabled = !selected;
  hotspotDiscountInput.disabled = !selected;
  hotspotPriceInput.disabled = !selected;
  hotspotLinkInput.disabled = !selected;
  hotspotMobileLinkInput.disabled = !selected;
  hotspotBorderColorInput.disabled = !selected;
  hotspotBackgroundColorInput.disabled = !selected;
  hotspotPlusColorInput.disabled = !selected;
  hotspotDesktopTooltipPositionInput.disabled = !selected;
  hotspotMobileTooltipPositionInput.disabled = !selected;
  hotspotPreviewInput.disabled = !selected;

  hotspotLabelInput.value = selected?.label ?? "";
  hotspotProductNameInput.value = selected?.productName ?? "";
  hotspotDiscountInput.value = selected?.discountText ?? "";
  hotspotPriceInput.value = selected?.priceText ?? "";
  hotspotLinkInput.value = selected?.linkUrl ?? "";
  hotspotMobileLinkInput.value = selected?.mobileLinkUrl ?? "";
  hotspotBorderColorInput.value = selected?.borderColor ?? "#ffffff";
  hotspotBackgroundColorInput.value = selected?.backgroundColor ?? "#ffffff";
  hotspotPlusColorInput.value = selected?.plusColor ?? "#000000";
  hotspotDesktopTooltipPositionInput.value = getTooltipPosition(selected, "desktop");
  hotspotMobileTooltipPositionInput.value = getTooltipPosition(selected, "mobile");
  hotspotPreviewInput.value = "";
  if (deleteHotspotSectionButton) {
    deleteHotspotSectionButton.disabled = hotspotState.sections.length <= 1 || !section;
  }

  const canDownload = hotspotState.sections.some(
    (entry) => entry.desktopBackgroundDataUrl && entry.items.length > 0
  );
  downloadHotspotDesktopHtmlButton.disabled = !canDownload;
  downloadHotspotDesktopCssButton.disabled = !canDownload;
  downloadHotspotDesktopJsButton.disabled = !canDownload;
  downloadHotspotMobileHtmlButton.disabled = !canDownload;
  downloadHotspotMobileCssButton.disabled = !canDownload;
  downloadHotspotMobileJsButton.disabled = !canDownload;
  downloadHotspotZipButton.disabled = !canDownload;
}

function startHotspotDrag(event) {
  const section = getCurrentHotspotSection();
  const hotspotId = event.currentTarget.dataset.hotspotId;
  const mode = event.currentTarget.dataset.hotspotMode;
  const item = section?.items.find((entry) => entry.id === hotspotId);
  if (!item || !section) {
    return;
  }

  event.preventDefault();

  const stageElement = mode === "mobile" ? hotspotMobileStage : hotspotDesktopStage;
  const rect = stageElement.getBoundingClientRect();
  const position = getHotspotPosition(item, mode);
  hotspotDragState = {
    id: hotspotId,
    mode,
    offsetX: event.clientX - rect.left - position.x,
    offsetY: event.clientY - rect.top - position.y,
    element: event.currentTarget,
    startX: event.clientX,
    startY: event.clientY,
    pointerX: event.clientX,
    pointerY: event.clientY,
    frameId: null,
    hasMoved: false,
  };
  section.selectedId = hotspotId;
  event.currentTarget.classList.add("dragging");

  window.addEventListener("pointermove", onHotspotDrag);
  window.addEventListener("pointerup", stopHotspotDrag);
  window.addEventListener("pointercancel", stopHotspotDrag);
  updateHotspotControls();
}

function onHotspotDrag(event) {
  if (!hotspotDragState) {
    return;
  }

  event.preventDefault();
  hotspotDragState.pointerX = event.clientX;
  hotspotDragState.pointerY = event.clientY;

  if (hotspotDragState.frameId) {
    return;
  }

  hotspotDragState.frameId = window.requestAnimationFrame(() => {
    updateDraggedHotspotPosition();
  });
}

function updateDraggedHotspotPosition() {
  const section = getCurrentHotspotSection();
  if (!hotspotDragState) {
    return;
  }

  hotspotDragState.frameId = null;

  const item = section?.items.find((entry) => entry.id === hotspotDragState.id);
  if (!item || !section) {
    return;
  }

  const deltaX = hotspotDragState.pointerX - hotspotDragState.startX;
  const deltaY = hotspotDragState.pointerY - hotspotDragState.startY;
  if (!hotspotDragState.hasMoved) {
    const distance = Math.hypot(deltaX, deltaY);
    if (distance < 4) {
      return;
    }
    hotspotDragState.hasMoved = true;
  }

  const isMobile = hotspotDragState.mode === "mobile";
  const stageElement = isMobile ? hotspotMobileStage : hotspotDesktopStage;
  const rect = stageElement.getBoundingClientRect();
  const currentWidth = isMobile
    ? rect.width
    : section.desktopDisplayWidth;
  const currentHeight = isMobile
    ? rect.height
    : section.desktopDisplayHeight;
  const nextX = clamp(
    hotspotDragState.pointerX - rect.left - hotspotDragState.offsetX,
    0,
    currentWidth
  );
  const nextY = clamp(
    hotspotDragState.pointerY - rect.top - hotspotDragState.offsetY,
    0,
    currentHeight
  );

  if (isMobile) {
    item.mobileXPct = (nextX / Math.max(currentWidth, 1)) * 100;
    item.mobileYPct = (nextY / Math.max(currentHeight, 1)) * 100;
  } else {
    const scaleX = section.desktopWidth / Math.max(section.desktopDisplayWidth, 1);
    const scaleY = section.desktopHeight / Math.max(section.desktopDisplayHeight, 1);
    item.x = Math.round(nextX * scaleX);
    item.y = Math.round(nextY * scaleY);
  }

  hotspotDragState.element.style.left = `${nextX}px`;
  hotspotDragState.element.style.top = `${nextY}px`;
}

function stopHotspotDrag() {
  if (hotspotDragState?.frameId) {
    window.cancelAnimationFrame(hotspotDragState.frameId);
    hotspotDragState.frameId = null;
  }
  hotspotDragState?.element?.classList.remove("dragging");
  window.removeEventListener("pointermove", onHotspotDrag);
  window.removeEventListener("pointerup", stopHotspotDrag);
  window.removeEventListener("pointercancel", stopHotspotDrag);
  hotspotDragState = null;
  renderHotspots();
  updateHotspotControls();
}

function updateSelectedHotspotLabel(event) {
  const section = getCurrentHotspotSection();
  const selected = section?.items.find((item) => item.id === section.selectedId);
  if (!selected) {
    return;
  }
  selected.label = event.target.value || "상품";
  renderHotspots();
}

function updateSelectedHotspotProductName(event) {
  const section = getCurrentHotspotSection();
  const selected = section?.items.find((item) => item.id === section.selectedId);
  if (!selected) {
    return;
  }
  selected.productName = event.target.value;
  renderHotspots();
}

function updateSelectedHotspotDiscount(event) {
  const section = getCurrentHotspotSection();
  const selected = section?.items.find((item) => item.id === section.selectedId);
  if (!selected) {
    return;
  }
  selected.discountText = event.target.value;
  renderHotspots();
}

function updateSelectedHotspotPrice(event) {
  const section = getCurrentHotspotSection();
  const selected = section?.items.find((item) => item.id === section.selectedId);
  if (!selected) {
    return;
  }
  selected.priceText = event.target.value;
  renderHotspots();
}

function updateSelectedHotspotLink(event) {
  const section = getCurrentHotspotSection();
  const selected = section?.items.find((item) => item.id === section.selectedId);
  if (!selected) {
    return;
  }
  selected.linkUrl = event.target.value.trim();
}

function updateSelectedHotspotMobileLink(event) {
  const section = getCurrentHotspotSection();
  const selected = section?.items.find((item) => item.id === section.selectedId);
  if (!selected) {
    return;
  }
  selected.mobileLinkUrl = event.target.value.trim();
}

function updateSelectedHotspotStyle() {
  const section = getCurrentHotspotSection();
  const selected = section?.items.find((item) => item.id === section.selectedId);
  if (!selected) {
    return;
  }

  selected.borderColor = hotspotBorderColorInput.value;
  selected.backgroundColor = hotspotBackgroundColorInput.value;
  selected.plusColor = hotspotPlusColorInput.value;
  selected.desktopTooltipPosition = hotspotDesktopTooltipPositionInput.value;
  selected.mobileTooltipPosition = hotspotMobileTooltipPositionInput.value;
  renderHotspots();
}

async function handleSelectedHotspotPreviewUpload(event) {
  const section = getCurrentHotspotSection();
  const selected = section?.items.find((item) => item.id === section.selectedId);
  const [file] = event.target.files ?? [];
  if (!selected || !file) {
    return;
  }

  selected.previewName = file.name;
  selected.previewUrl = URL.createObjectURL(file);
  selected.previewDataUrl = await fileToDataUrl(file);
  hotspotStatus.textContent = "Hover 이미지가 연결되었습니다.";
  renderHotspots();
}

function deleteSelectedHotspot() {
  const section = getCurrentHotspotSection();
  if (!section?.selectedId) {
    return;
  }

  const index = section.items.findIndex((item) => item.id === section.selectedId);
  if (index === -1) {
    return;
  }

  section.items.splice(index, 1);
  section.selectedId = section.items[0]?.id ?? null;
  hotspotStatus.textContent = "선택된 핫스팟을 삭제했습니다.";
  renderHotspotSectionList();
  renderHotspots();
  updateHotspotControls();
}

function downloadHotspotAsset(platform, type) {
  if (!hotspotState.sections.some((entry) => entry.desktopBackgroundDataUrl && entry.items.length)) {
    return;
  }

  const assetMap = buildHotspotExportAssets()[platform];
  const fileConfig = {
    html: { name: `${platform}-index.html`, mime: "text/html" },
    css: { name: `${platform}-style.css`, mime: "text/css" },
    js: { name: `${platform}-script.js`, mime: "text/javascript" },
  }[type];

  if (!fileConfig) {
    return;
  }

  const blob = new Blob([assetMap[type]], { type: fileConfig.mime });
  const downloadUrl = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  anchor.href = downloadUrl;
  anchor.download = fileConfig.name;
  anchor.click();
  setTimeout(() => URL.revokeObjectURL(downloadUrl), 1000);
}

async function downloadHotspotZip() {
  if (!window.JSZip) {
    hotspotStatus.textContent =
      "ZIP 라이브러리를 불러오지 못했습니다. 개별 파일 다운로드를 사용해 주세요.";
    return;
  }

  const assets = buildHotspotExportAssets();
  const zip = new window.JSZip();

  zip.folder("pc")?.file("index.html", assets.desktop.html);
  zip.folder("pc")?.file("style.css", assets.desktop.css);
  zip.folder("pc")?.file("script.js", assets.desktop.js);
  assets.desktop.images.forEach((image) => {
    zip.folder("pc/images")?.file(image.name, image.bytes);
  });
  zip.folder("mobile")?.file("index.html", assets.mobile.html);
  zip.folder("mobile")?.file("style.css", assets.mobile.css);
  zip.folder("mobile")?.file("script.js", assets.mobile.js);
  assets.mobile.images.forEach((image) => {
    zip.folder("mobile/images")?.file(image.name, image.bytes);
  });

  const blob = await zip.generateAsync({ type: "blob" });
  const downloadUrl = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  anchor.href = downloadUrl;
  anchor.download = "hotspot-sources.zip";
  anchor.click();
  setTimeout(() => URL.revokeObjectURL(downloadUrl), 1000);
}

function buildHotspotExportAssets() {
  const sections = hotspotState.sections.filter(
    (section) => section.desktopBackgroundDataUrl && section.items.length
  );
  const desktopImages = [];
  const mobileImages = [];
  const desktopSections = sections.map((section, index) => {
    const desktopBackgroundName = sanitizeExportFileName(
      section.desktopBackgroundName || `desktop-background-${index + 1}.png`
    );
    desktopImages.push(createExportImageAsset(desktopBackgroundName, section.desktopBackgroundDataUrl));
    return {
      id: section.id,
      name: section.name,
      background: {
        name: desktopBackgroundName,
        src: `./images/${desktopBackgroundName}`,
        width: section.desktopWidth,
        height: section.desktopHeight,
      },
      hotspots: section.items.map((item) => ({
        id: item.id,
        label: item.label,
        productName: item.productName,
        discountText: item.discountText,
        priceText: item.priceText,
        x: item.x,
        y: item.y,
        linkUrl: item.linkUrl || item.mobileLinkUrl || "#",
        borderColor: item.borderColor,
        backgroundColor: item.backgroundColor,
        plusColor: item.plusColor,
        tooltipPosition: getTooltipPosition(item, "desktop"),
        previewSrc: item.previewDataUrl
          ? `./images/${sanitizeExportFileName(item.previewName || `${item.id}.png`)}`
          : "",
      })),
    };
  });

  const mobileSections = sections.map((section, index) => {
    const mobileBackgroundName = sanitizeExportFileName(
      section.mobileBackgroundName ||
        section.desktopBackgroundName ||
        `mobile-background-${index + 1}.png`
    );
    mobileImages.push(
      createExportImageAsset(
        mobileBackgroundName,
        section.mobileBackgroundDataUrl || section.desktopBackgroundDataUrl
      )
    );
    return {
      id: section.id,
      name: section.name,
      background: {
        name: mobileBackgroundName,
        src: `./images/${mobileBackgroundName}`,
        width: section.mobileWidth,
        height: section.mobileHeight,
      },
      hotspots: section.items.map((item) => ({
        id: item.id,
        label: item.label,
        productName: item.productName,
        discountText: item.discountText,
        priceText: item.priceText,
        xPercent: getMobilePercentX(item, section),
        yPercent: getMobilePercentY(item, section),
        linkUrl: item.mobileLinkUrl || item.linkUrl || "#",
        borderColor: item.borderColor,
        backgroundColor: item.backgroundColor,
        plusColor: item.plusColor,
        tooltipPosition: getTooltipPosition(item, "mobile"),
        previewSrc: item.previewDataUrl
          ? `./images/${sanitizeExportFileName(item.previewName || `${item.id}.png`)}`
          : "",
      })),
    };
  });

  sections.forEach((section) => {
    section.items.forEach((item) => {
      if (!item.previewDataUrl) {
        return;
      }
      const previewFileName = sanitizeExportFileName(item.previewName || `${item.id}.png`);
      const asset = createExportImageAsset(previewFileName, item.previewDataUrl);
      desktopImages.push(asset);
      mobileImages.push(asset);
    });
  });

  return {
    desktop: {
      ...buildPlatformAssets("desktop", { sections: desktopSections }),
      images: dedupeExportImages(desktopImages),
    },
    mobile: {
      ...buildPlatformAssets("mobile", { sections: mobileSections }),
      images: dedupeExportImages(mobileImages),
    },
  };
}

function fileToDataUrl(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result || ""));
    reader.onerror = () => reject(new Error("File reading failed."));
    reader.readAsDataURL(file);
  });
}

function sanitizeExportFileName(name) {
  const cleaned = String(name || "asset")
    .trim()
    .replaceAll(/[^a-zA-Z0-9._-]/g, "-")
    .replaceAll(/-+/g, "-");

  return cleaned || "asset";
}

function createExportImageAsset(name, dataUrl) {
  return {
    name,
    bytes: dataUrlToUint8Array(dataUrl),
  };
}

function dedupeExportImages(images) {
  const seen = new Set();
  return images.filter((image) => {
    if (seen.has(image.name)) {
      return false;
    }
    seen.add(image.name);
    return true;
  });
}

function dataUrlToUint8Array(dataUrl) {
  const [, base64 = ""] = String(dataUrl).split(",");
  const binary = atob(base64);
  const bytes = new Uint8Array(binary.length);
  for (let index = 0; index < binary.length; index += 1) {
    bytes[index] = binary.charCodeAt(index);
  }
  return bytes;
}

function createHotspotPoint(item, mode) {
  const section = getCurrentHotspotSection();
  const point = document.createElement("button");
  point.type = "button";
  point.className = "hotspot-point";
  if (item.id === section?.selectedId) {
    point.classList.add("selected");
  }

  const position = getHotspotPosition(item, mode);
  point.style.left = `${position.x}px`;
  point.style.top = `${position.y}px`;
  point.style.borderColor = item.borderColor ?? "#ffffff";
  point.style.background = item.backgroundColor ?? "#ffffff";
  point.style.color = item.plusColor ?? "#000000";
  point.dataset.hotspotId = item.id;
  point.dataset.hotspotMode = mode;
  point.textContent = "+";

  const tooltip = document.createElement("div");
  tooltip.className = `hotspot-tooltip position-${getTooltipPosition(item, mode)}`;
  tooltip.appendChild(buildTooltipCard(item, item.previewDataUrl, mode));
  point.appendChild(tooltip);

  point.addEventListener("click", () => {
    if (section) {
      section.selectedId = item.id;
    }
    renderHotspots();
    updateHotspotControls();
  });
  point.addEventListener("pointerdown", startHotspotDrag);

  return point;
}

function getTooltipPosition(item, mode) {
  if (!item) {
    return "right";
  }

  if (mode === "mobile") {
    return item.mobileTooltipPosition ?? item.tooltipPosition ?? "right";
  }

  return item.desktopTooltipPosition ?? item.tooltipPosition ?? "right";
}

function syncHotspotStages() {
  const section = getCurrentHotspotSection();
  if (!section) {
    return;
  }

  hotspotDesktopStage.style.width = `${section.desktopDisplayWidth}px`;
  hotspotDesktopStage.style.height = `${section.desktopDisplayHeight}px`;
  hotspotDesktopBackgroundImage.src = section.desktopBackgroundDataUrl || "";

  hotspotMobileStage.style.width = "100%";
  hotspotMobileStage.style.height = "auto";
  hotspotMobileStage.style.aspectRatio = "auto";
  hotspotMobileBackgroundImage.src =
    section.mobileBackgroundDataUrl || section.desktopBackgroundDataUrl || "";

  hotspotMeta.textContent =
    `${section.name} · PC 미리보기 ${section.desktopDisplayWidth} x ${section.desktopDisplayHeight}px ` +
    `(실제 ${section.desktopWidth} x ${section.desktopHeight}px) · ` +
    `Mobile ${section.mobileWidth} x ${section.mobileHeight}px`;
}

function buildTooltipCard(item, previewSrc, mode = "desktop") {
  const card = document.createElement("div");
  card.className = "hotspot-tooltip-card";

  if (previewSrc) {
    const image = document.createElement("img");
    image.src = previewSrc;
    image.alt = item.productName || item.label;
    card.appendChild(image);
  }

  const body = document.createElement("div");
  body.className = "hotspot-tooltip-body";

  const name = document.createElement("p");
  name.className = "hotspot-tooltip-name";
  if (mode === "desktop") {
    name.innerHTML = escapeHtmlWithBreaks(item.productName || item.label || "");
  } else {
    name.textContent = stripBreakTags(item.productName || item.label || "");
  }
  body.appendChild(name);

  if (item.discountText || item.priceText) {
    const priceRow = document.createElement("div");
    priceRow.className = "hotspot-tooltip-price-row";

    if (item.discountText) {
      const discount = document.createElement("span");
      discount.className = "hotspot-tooltip-discount";
      discount.textContent = item.discountText;
      priceRow.appendChild(discount);
    }

    if (item.priceText) {
      const price = document.createElement("span");
      price.className = "hotspot-tooltip-price";
      price.textContent = item.priceText;
      priceRow.appendChild(price);
    }

    body.appendChild(priceRow);
  }

  card.appendChild(body);
  return card;
}

function getHotspotPosition(item, mode) {
  const section = getCurrentHotspotSection();
  if (mode === "mobile") {
    const displayWidth = hotspotMobileStage?.clientWidth || section?.mobileWidth || 360;
    const displayHeight = hotspotMobileStage?.clientHeight || section?.mobileHeight || 640;
    return {
      x: Math.round((getMobilePercentX(item, section) / 100) * displayWidth),
      y: Math.round((getMobilePercentY(item, section) / 100) * displayHeight),
    };
  }

  const scaleX = (section?.desktopDisplayWidth || 1) / Math.max(section?.desktopWidth || 1, 1);
  const scaleY = (section?.desktopDisplayHeight || 1) / Math.max(section?.desktopHeight || 1, 1);
  return {
    x: Math.round(item.x * scaleX),
    y: Math.round(item.y * scaleY),
  };
}

function getMobilePercentX(item, section = getCurrentHotspotSection()) {
  if (typeof item.xPercent === "number") {
    return clamp(item.xPercent, 0, 100);
  }
  if (typeof item.mobileXPct === "number") {
    return clamp(item.mobileXPct, 0, 100);
  }

  return clamp((item.mobileX / Math.max(section?.mobileWidth || 1, 1)) * 100, 0, 100);
}

function getMobilePercentY(item, section = getCurrentHotspotSection()) {
  if (typeof item.yPercent === "number") {
    return clamp(item.yPercent, 0, 100);
  }
  if (typeof item.mobileYPct === "number") {
    return clamp(item.mobileYPct, 0, 100);
  }

  return clamp((item.mobileY / Math.max(section?.mobileHeight || 1, 1)) * 100, 0, 100);
}

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function escapeHtmlWithBreaks(value) {
  return String(value ?? "")
    .split(/<br\s*\/?>/i)
    .map((part) => escapeHtml(part))
    .join("<br>");
}

function stripBreakTags(value) {
  return String(value ?? "").replaceAll(/<br\s*\/?>/gi, " ");
}

function buildPromoStageMarkup(platform, data) {
  return data.sections
    .map((section) => {
      const backgroundAlt = escapeHtml(`${section.name} background`);
      const backgroundSrc = escapeHtml(section.background.src);
      const hotspotsMarkup = section.hotspots
        .map((item) => {
          const linkUrl = item.linkUrl && item.linkUrl !== "#" ? escapeHtml(item.linkUrl) : "";
          const cardTag = linkUrl ? "a" : "div";
          const cardAttrs = linkUrl
            ? `class="promo-tooltip-card" href="${linkUrl}" target="_blank" rel="noopener noreferrer"`
            : 'class="promo-tooltip-card"';
          const previewMarkup = item.previewSrc
            ? `        <img src="${escapeHtml(item.previewSrc)}" alt="${escapeHtml(
                item.productName || item.label
              )}" />\n`
            : "";
          const priceMarkup =
            item.discountText || item.priceText
              ? `        <div class="promo-tooltip-price-row">\n${
                  item.discountText
                    ? `          <span class="promo-tooltip-discount">${escapeHtml(
                        item.discountText
                      )}</span>\n`
                    : ""
                }${
                  item.priceText
                    ? `          <span class="promo-tooltip-price">${escapeHtml(
                        item.priceText
                      )}</span>\n`
                    : ""
                }        </div>\n`
              : "";
          const productNameMarkup =
            platform === "desktop"
              ? escapeHtmlWithBreaks(item.productName || item.label || "")
              : escapeHtml(stripBreakTags(item.productName || item.label || ""));
          const percentX =
            platform === "mobile"
              ? getMobilePercentX(item, {
                  mobileWidth: section.background.width,
                  mobileHeight: section.background.height,
                })
              : (item.x / Math.max(section.background.width, 1)) * 100;
          const percentY =
            platform === "mobile"
              ? getMobilePercentY(item, {
                  mobileWidth: section.background.width,
                  mobileHeight: section.background.height,
                })
              : (item.y / Math.max(section.background.height, 1)) * 100;

          return `    <div class="promo-point" role="button" tabindex="0" aria-label="핫스팟" data-hotspot-id="${escapeHtml(
            item.id
          )}" data-x-percent="${percentX}" data-y-percent="${percentY}" style="border-color: ${escapeHtml(
            item.borderColor || "#ffffff"
          )}; background: ${escapeHtml(item.backgroundColor || "#ffffff")}; color: ${escapeHtml(
            item.plusColor || "#000000"
          )};">
      +
      <div class="promo-tooltip position-${escapeHtml(item.tooltipPosition || "right")}">
        <${cardTag} ${cardAttrs}>
${previewMarkup}          <div class="promo-tooltip-body">
            <p class="promo-tooltip-name">${productNameMarkup}</p>
${priceMarkup}          </div>
        </${cardTag}>
      </div>
    </div>`;
        })
        .join("");

      return `<div class="promo-stage" data-section-id="${escapeHtml(section.id)}">
  <img class="promo-background" src="${backgroundSrc}" alt="${backgroundAlt}" />
${hotspotsMarkup}
</div>`;
    })
    .join("");
}

function buildPlatformAssets(platform, data) {
  const isMobile = platform === "mobile";
  const stageMarkup = buildPromoStageMarkup(platform, data);
  const html = `<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${isMobile ? "Mobile" : "PC"} Promotion Hotspot</title>
    <link rel="stylesheet" href="./style.css" />
  </head>
  <body>
    ${stageMarkup}
    <script src="./script.js"></script>
  </body>
</html>`;

  const css = isMobile
    ? `html, body {
  margin: 0;
  padding: 0;
}

body {
  background: #fff;
}

.promo-stage {
  position: relative;
  width: 100%;
  margin: 0;
  overflow: visible;
}

.promo-stage > img {
  position: relative;
  width: 100%;
  height: auto;
  display: block;
  object-fit: contain;
}

.promo-point {
  position: absolute;
  width: 24px;
  height: 24px;
  margin: 0;
  padding: 0;
  appearance: none;
  -webkit-appearance: none;
  box-sizing: border-box;
  border: 2px solid #ffffff;
  border-radius: 999px;
  background: #ffffff;
  color: #000000;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 0;
  cursor: pointer;
  transform: translate(-50%, -50%);
  box-shadow: none;
}

.promo-point::before,
.promo-point::after {
  content: "";
  position: absolute;
  left: 50%;
  top: 50%;
  background: currentColor;
  transform: translate(-50%, -50%);
  border-radius: 999px;
}

.promo-point::before {
  width: 9px;
  height: 2px;
}

.promo-point::after {
  width: 2px;
  height: 9px;
}

.promo-tooltip {
  position: absolute;
  left: calc(100% + 10px);
  top: 50%;
  display: none;
  width: max-content;
  max-width: 200px;
  max-height: 84px;
  padding: 10px;
  border-radius: 0;
  background: #fff;
  text-align: left;
  transform: translateY(-50%);
  box-sizing: border-box;
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.18);
}

.promo-point.is-open .promo-tooltip {
  display: block;
}

.promo-tooltip img {
  display: block;
  width: 48px;
  height: 64px;
  flex: 0 0 48px;
  object-fit: cover;
  border-radius: 0;
}

.promo-tooltip-card {
  display: flex;
  align-items: center;
  gap: 10px;
  color: inherit;
  text-decoration: none;
}

.promo-tooltip-body {
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-width: 0;
  flex: 1;
}

.promo-tooltip-name {
  margin: 0 0 6px;
  color: #111;
  font-size: 12px;
  font-weight: 400;
  line-height: 1.3;
  display: -webkit-box;
  overflow: hidden;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  word-break: keep-all;
}

.promo-tooltip-price-row {
  display: flex;
  align-items: baseline;
  gap: 6px;
  flex-wrap: wrap;
}

.promo-tooltip-discount {
  color: #ff5a1f;
  font-size: 12px;
  font-weight: 800;
}

.promo-tooltip-price {
  color: #111;
  font-size: 12px;
  font-weight: 800;
}

.promo-tooltip.position-left {
  left: auto;
  right: calc(100% + 10px);
}

.promo-tooltip.position-top {
  left: 50%;
  top: auto;
  bottom: calc(100% + 10px);
  transform: translateX(-50%);
}

.promo-tooltip.position-bottom {
  left: 50%;
  top: calc(100% + 10px);
  transform: translateX(-50%);
}`
    : `.promo-stage {
  position: relative;
  width: 100%;
  margin: 0;
}

.promo-stage > img {
  display: block;
  width: 100%;
  height: auto;
}

.promo-point {
  position: absolute;
  width: 32px;
  height: 32px;
  margin: 0;
  padding: 0;
  appearance: none;
  -webkit-appearance: none;
  box-sizing: border-box;
  border: 2px solid #ffffff;
  border-radius: 999px;
  background: #ffffff;
  color: #000000;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 0;
  cursor: pointer;
  transform: translate(-50%, -50%);
  box-shadow: none;
}

.promo-point::before,
.promo-point::after {
  content: "";
  position: absolute;
  left: 50%;
  top: 50%;
  background: currentColor;
  transform: translate(-50%, -50%);
  border-radius: 999px;
}

.promo-point::before {
  width: 11px;
  height: 2px;
}

.promo-point::after {
  width: 2px;
  height: 11px;
}

.promo-tooltip {
  position: absolute;
  left: calc(100% + 16px);
  top: 50%;
  display: none;
  width: max-content;
  max-height: 128px;
  padding: 16px;
  border-radius: 0;
  background: #fff;
  text-align: left;
  transform: translateY(-50%);
  box-sizing: border-box;
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.18);
}

.promo-point.is-open .promo-tooltip {
  display: block;
}

.promo-tooltip img {
  display: block;
  width: 72px;
  height: 96px;
  flex: 0 0 72px;
  object-fit: cover;
  border-radius: 0;
}

.promo-tooltip-card {
  display: flex;
  align-items: center;
  gap: 16px;
  color: inherit;
  text-decoration: none;
}

.promo-tooltip-body {
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-width: 0;
  flex: 1;
}

.promo-tooltip-name {
  margin: 0 0 10px;
  color: #111;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.3;
  display: -webkit-box;
  overflow: hidden;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  word-break: keep-all;
}

.promo-tooltip-price-row {
  display: flex;
  align-items: baseline;
  gap: 8px;
  flex-wrap: wrap;
}

.promo-tooltip-discount {
  color: #ff5a1f;
  font-size: 14px;
  font-weight: 800;
}

.promo-tooltip-price {
  color: #111;
  font-size: 14px;
  font-weight: 800;
}

.promo-tooltip.position-left {
  left: auto;
  right: calc(100% + 16px);
}

.promo-tooltip.position-top {
  left: 50%;
  top: auto;
  bottom: calc(100% + 16px);
  transform: translateX(-50%);
}

.promo-tooltip.position-bottom {
  left: 50%;
  top: calc(100% + 16px);
  transform: translateX(-50%);
}`;

  const js = `const PROMO_DATA = ${JSON.stringify(data, null, 2)};

let openPoint = null;
const sections = Array.from(document.querySelectorAll(".promo-stage"));
const points = sections.flatMap((stage) => Array.from(stage.querySelectorAll(".promo-point")).map((point) => {
  const background = stage.querySelector(".promo-background");
  point.addEventListener("click", (event) => {
    event.preventDefault();
    event.stopPropagation();

    if (openPoint && openPoint !== point) {
      openPoint.classList.remove("is-open");
    }

    const willOpen = !point.classList.contains("is-open");
    point.classList.toggle("is-open", willOpen);
    openPoint = willOpen ? point : null;
  });

  const tooltip = point.querySelector(".promo-tooltip");
  tooltip.addEventListener("click", (event) => {
    event.stopPropagation();
  });

  return {
    stage,
    background,
    point,
    item: {
      xPercent: Number(point.dataset.xPercent || 0),
      yPercent: Number(point.dataset.yPercent || 0),
    },
  };
}));

function layoutPoints() {
  points.forEach(({ stage, background, point, item }) => {
    const width = background.clientWidth || stage.clientWidth;
    const height = background.clientHeight || stage.clientHeight;
    const left = (item.xPercent / 100) * width;
    const top = (item.yPercent / 100) * height;
    point.style.left = left + "px";
    point.style.top = top + "px";
  });
}

Promise.all(
  sections.map((stage) => {
    const image = stage.querySelector(".promo-background");
    if (!image || image.complete) {
      return Promise.resolve();
    }

    return new Promise((resolve) => {
      image.addEventListener("load", resolve, { once: true });
      image.addEventListener("error", resolve, { once: true });
    });
  })
).then(layoutPoints);

window.addEventListener("resize", layoutPoints);

document.addEventListener("click", (event) => {
  if (!openPoint) {
    return;
  }

  if (event.target instanceof Node && openPoint.contains(event.target)) {
    return;
  }

  openPoint.classList.remove("is-open");
  openPoint = null;
});`;

  return {
    html,
    css,
    js,
    json: JSON.stringify(data, null, 2),
  };
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
