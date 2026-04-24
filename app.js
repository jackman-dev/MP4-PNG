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
const csvMergeInput = document.getElementById("csvMergeInput");
const csvHeaderInput = document.getElementById("csvHeaderInput");
const csvDownloadButton = document.getElementById("csvDownloadButton");
const csvStatus = document.getElementById("csvStatus");
const csvMeta = document.getElementById("csvMeta");
const csvPreview = document.getElementById("csvPreview");
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
const sliderList = document.getElementById("sliderList");
const addSliderButton = document.getElementById("addSliderButton");
const deleteSliderButton = document.getElementById("deleteSliderButton");
const sliderImageInput = document.getElementById("sliderImageInput");
const clearSliderImagesButton = document.getElementById("clearSliderImagesButton");
const sliderNameInput = document.getElementById("sliderNameInput");
const sliderSwiperPresetInput = document.getElementById("sliderSwiperPresetInput");
const sliderSlidesPerViewInput = document.getElementById("sliderSlidesPerViewInput");
const sliderSpaceBetweenInput = document.getElementById("sliderSpaceBetweenInput");
const sliderSpeedInput = document.getElementById("sliderSpeedInput");
const sliderIntervalInput = document.getElementById("sliderIntervalInput");
const sliderDirectionInput = document.getElementById("sliderDirectionInput");
const sliderPaginationInput = document.getElementById("sliderPaginationInput");
const sliderAutoplayOptionInput = document.getElementById("sliderAutoplayOptionInput");
const sliderLoopOptionInput = document.getElementById("sliderLoopOptionInput");
const sliderArrowsOptionInput = document.getElementById("sliderArrowsOptionInput");
const sliderCenteredOptionInput = document.getElementById("sliderCenteredOptionInput");
const sliderPreview = document.getElementById("sliderPreview");
const sliderStatus = document.getElementById("sliderStatus");
const sliderMeta = document.getElementById("sliderMeta");
const sliderHtmlCode = document.getElementById("sliderHtmlCode");
const sliderCssCode = document.getElementById("sliderCssCode");
const sliderJsCode = document.getElementById("sliderJsCode");
const copySliderHtmlButton = document.getElementById("copySliderHtmlButton");
const copySliderCssButton = document.getElementById("copySliderCssButton");
const copySliderJsButton = document.getElementById("copySliderJsButton");
const copySliderAllButton = document.getElementById("copySliderAllButton");
const copySliderHtmlInlineButton = document.getElementById("copySliderHtmlInlineButton");
const copySliderCssInlineButton = document.getElementById("copySliderCssInlineButton");
const copySliderJsInlineButton = document.getElementById("copySliderJsInlineButton");

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
const csvState = {
  fileNames: [],
  csvText: "",
  rowCount: 0,
  columnCount: 0,
};
const hotspotState = {
  sections: [],
  selectedSectionId: null,
};
const sliderState = {
  sliders: [createSliderItem(1)],
  selectedSliderId: null,
  timerId: null,
  generated: {
    html: "",
    css: "",
    js: "",
  },
  previewSwiper: null,
  isLoadingSliderControls: false,
  get activeSlider() {
    return this.sliders.find((slider) => slider.id === this.selectedSliderId) || this.sliders[0];
  },
  get images() {
    return this.activeSlider?.images ?? [];
  },
  set images(value) {
    if (this.activeSlider) {
      this.activeSlider.images = value;
    }
  },
  get currentIndex() {
    return this.activeSlider?.currentIndex ?? 0;
  },
  set currentIndex(value) {
    if (this.activeSlider) {
      this.activeSlider.currentIndex = value;
    }
  },
};
sliderState.selectedSliderId = sliderState.sliders[0].id;

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
csvMergeInput?.addEventListener("change", handleCsvMergeUpload);
csvHeaderInput?.addEventListener("change", handleCsvMergeUpload);
csvDownloadButton?.addEventListener("click", downloadMergedCsv);
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
sliderList?.addEventListener("click", handleSliderListClick);
addSliderButton?.addEventListener("click", addSliderItem);
deleteSliderButton?.addEventListener("click", deleteSelectedSliderItem);
sliderImageInput?.addEventListener("change", handleSliderImageUpload);
clearSliderImagesButton?.addEventListener("click", clearSliderImages);
sliderNameInput?.addEventListener("input", updateSliderBuilder);
sliderSwiperPresetInput?.addEventListener("change", handleSliderPresetChange);
[
  sliderSlidesPerViewInput,
  sliderSpaceBetweenInput,
  sliderSpeedInput,
  sliderIntervalInput,
  sliderDirectionInput,
  sliderPaginationInput,
  sliderAutoplayOptionInput,
  sliderLoopOptionInput,
  sliderArrowsOptionInput,
  sliderCenteredOptionInput,
].forEach((input) => {
  input?.addEventListener("input", updateSliderBuilder);
  input?.addEventListener("change", updateSliderBuilder);
});
sliderPreview?.addEventListener("click", handleSliderPreviewClick);
copySliderHtmlButton?.addEventListener("click", () => copySliderSource("html"));
copySliderCssButton?.addEventListener("click", () => copySliderSource("css"));
copySliderJsButton?.addEventListener("click", () => copySliderSource("js"));
copySliderAllButton?.addEventListener("click", copyAllSliderSource);
copySliderHtmlInlineButton?.addEventListener("click", () => copySliderSource("html"));
copySliderCssInlineButton?.addEventListener("click", () => copySliderSource("css"));
copySliderJsInlineButton?.addEventListener("click", () => copySliderSource("js"));

renderIcons();
renderLayerList();
updateResolutionHint();
updateSelectedDeleteButton();
updateExcelDownloadAvailability();
updateCsvDownloadAvailability();
initializeHotspotSections();
updateHotspotControls();
syncHotspotStages();
renderHotspots();
loadActiveSliderControls();
updateSliderBuilder();

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

function createSliderItem(index = 1) {
  const presetConfig = getBaseSwiperPresetConfig("basic");
  return {
    id: crypto.randomUUID(),
    className: index === 1 ? "promo-slider" : `promo-slider-${index}`,
    preset: "basic",
    images: [],
    currentIndex: 0,
    options: {
      slidesPerView: String(presetConfig.slidesPerView),
      spaceBetween: String(presetConfig.spaceBetween),
      speed: String(presetConfig.speed),
      interval: String(presetConfig.interval),
      direction: presetConfig.direction,
      pagination: presetConfig.navigationType,
      autoplay: presetConfig.autoplay,
      loop: presetConfig.loop,
      arrows: presetConfig.arrows,
      centered: presetConfig.centeredSlides,
    },
  };
}

function getActiveSliderItem() {
  return sliderState.activeSlider;
}

function saveActiveSliderControls() {
  if (sliderState.isLoadingSliderControls) {
    return;
  }

  const slider = getActiveSliderItem();
  if (!slider) {
    return;
  }

  slider.className = getSliderClassName();
  slider.preset = getSliderSwiperPreset();
  slider.options = {
    slidesPerView: sliderSlidesPerViewInput?.value || "1",
    spaceBetween: sliderSpaceBetweenInput?.value || "0",
    speed: sliderSpeedInput?.value || "420",
    interval: sliderIntervalInput?.value || "3000",
    direction: sliderDirectionInput?.value || "horizontal",
    pagination: sliderPaginationInput?.value || "none",
    autoplay: Boolean(sliderAutoplayOptionInput?.checked),
    loop: Boolean(sliderLoopOptionInput?.checked),
    arrows: Boolean(sliderArrowsOptionInput?.checked),
    centered: Boolean(sliderCenteredOptionInput?.checked),
  };
}

function loadActiveSliderControls() {
  const slider = getActiveSliderItem();
  if (!slider) {
    return;
  }

  sliderState.isLoadingSliderControls = true;
  if (sliderNameInput) {
    sliderNameInput.value = slider.className;
  }
  if (sliderSwiperPresetInput) {
    sliderSwiperPresetInput.value = slider.preset;
  }
  if (sliderSlidesPerViewInput) {
    sliderSlidesPerViewInput.value = slider.options.slidesPerView;
  }
  if (sliderSpaceBetweenInput) {
    sliderSpaceBetweenInput.value = slider.options.spaceBetween;
  }
  if (sliderSpeedInput) {
    sliderSpeedInput.value = slider.options.speed;
  }
  if (sliderIntervalInput) {
    sliderIntervalInput.value = slider.options.interval;
  }
  if (sliderDirectionInput) {
    sliderDirectionInput.value = slider.options.direction;
  }
  if (sliderPaginationInput) {
    sliderPaginationInput.value = slider.options.pagination;
  }
  if (sliderAutoplayOptionInput) {
    sliderAutoplayOptionInput.checked = slider.options.autoplay;
  }
  if (sliderLoopOptionInput) {
    sliderLoopOptionInput.checked = slider.options.loop;
  }
  if (sliderArrowsOptionInput) {
    sliderArrowsOptionInput.checked = slider.options.arrows;
  }
  if (sliderCenteredOptionInput) {
    sliderCenteredOptionInput.checked = slider.options.centered;
  }
  sliderState.isLoadingSliderControls = false;
}

function renderSliderList() {
  if (!sliderList) {
    return;
  }

  sliderList.innerHTML = sliderState.sliders
    .map(
      (slider, index) => `<button class="slider-list-item${
        slider.id === sliderState.selectedSliderId ? " is-active" : ""
      }" type="button" data-slider-id="${slider.id}">
        <span>${escapeHtml(slider.className || `slider-${index + 1}`)}</span>
        <small>${slider.images.length}개</small>
      </button>`
    )
    .join("");

  if (deleteSliderButton) {
    deleteSliderButton.disabled = sliderState.sliders.length <= 1;
  }
}

function handleSliderListClick(event) {
  const button = event.target instanceof HTMLElement ? event.target.closest("[data-slider-id]") : null;
  if (!(button instanceof HTMLElement)) {
    return;
  }

  saveActiveSliderControls();
  sliderState.selectedSliderId = button.dataset.sliderId || sliderState.selectedSliderId;
  loadActiveSliderControls();
  updateSliderBuilder();
}

function addSliderItem() {
  saveActiveSliderControls();
  const slider = createSliderItem(sliderState.sliders.length + 1);
  sliderState.sliders.push(slider);
  sliderState.selectedSliderId = slider.id;
  loadActiveSliderControls();
  sliderStatus.textContent = `${slider.className} 슬라이더를 추가했습니다.`;
  updateSliderBuilder();
}

function deleteSelectedSliderItem() {
  if (sliderState.sliders.length <= 1) {
    return;
  }

  const selectedSlider = getActiveSliderItem();
  selectedSlider?.images.forEach((image) => URL.revokeObjectURL(image.url));
  sliderState.sliders = sliderState.sliders.filter((slider) => slider.id !== sliderState.selectedSliderId);
  sliderState.selectedSliderId = sliderState.sliders[0].id;
  loadActiveSliderControls();
  sliderStatus.textContent = "선택한 슬라이더를 삭제했습니다.";
  updateSliderBuilder();
}

function handleSliderImageUpload(event) {
  const files = Array.from(event.target.files ?? []);
  if (!files.length) {
    return;
  }

  files.forEach((file) => {
    sliderState.images.push({
      id: crypto.randomUUID(),
      name: file.name,
      url: URL.createObjectURL(file),
    });
  });

  sliderState.currentIndex = Math.min(sliderState.currentIndex, sliderState.images.length - 1);
  sliderStatus.textContent = `${files.length}개 이미지를 추가했습니다. 소스는 아래에서 바로 복사할 수 있습니다.`;
  event.target.value = "";
  updateSliderBuilder();
}

function clearSliderImages() {
  sliderState.images.forEach((image) => URL.revokeObjectURL(image.url));
  sliderState.images = [];
  sliderState.currentIndex = 0;
  sliderStatus.textContent = "슬라이드 이미지를 모두 삭제했습니다.";
  updateSliderBuilder();
}

function handleSliderPresetChange() {
  syncSliderOptionControlsToPreset();
  updateSliderBuilder();
}

function syncSliderOptionControlsToPreset() {
  const presetConfig = getBaseSwiperPresetConfig(getSliderSwiperPreset());
  if (sliderSlidesPerViewInput) {
    sliderSlidesPerViewInput.value = String(presetConfig.slidesPerView);
  }
  if (sliderSpaceBetweenInput) {
    sliderSpaceBetweenInput.value = String(presetConfig.spaceBetween);
  }
  if (sliderSpeedInput) {
    sliderSpeedInput.value = String(presetConfig.speed);
  }
  if (sliderIntervalInput) {
    sliderIntervalInput.value = String(presetConfig.interval);
  }
  if (sliderDirectionInput) {
    sliderDirectionInput.value = presetConfig.direction;
  }
  if (sliderPaginationInput) {
    sliderPaginationInput.value = presetConfig.scrollbar ? "scrollbar" : presetConfig.navigationType;
  }
  if (sliderAutoplayOptionInput) {
    sliderAutoplayOptionInput.checked = presetConfig.autoplay;
  }
  if (sliderLoopOptionInput) {
    sliderLoopOptionInput.checked = presetConfig.loop;
  }
  if (sliderArrowsOptionInput) {
    sliderArrowsOptionInput.checked = presetConfig.arrows;
  }
  if (sliderCenteredOptionInput) {
    sliderCenteredOptionInput.checked = presetConfig.centeredSlides;
  }
}

function updateSliderBuilder() {
  saveActiveSliderControls();
  renderSliderList();
  renderSliderPreview();
  updateSliderSources();
  updateSliderControls();
}

function renderSliderPreview() {
  if (!sliderPreview) {
    return;
  }

  window.clearInterval(sliderState.timerId);
  sliderState.timerId = null;
  destroySliderPreviewSwiper();

  if (!sliderState.images.length) {
    sliderPreview.className = "slider-preview-empty";
    sliderPreview.textContent = "슬라이드 이미지를 업로드해 주세요.";
    sliderMeta.textContent = "업로드한 이미지 순서대로 슬라이더가 구성됩니다.";
    return;
  }

  const className = getSliderClassName();
  const preset = getSliderSwiperPreset();
  const presetConfig = getSwiperPresetConfig(preset);
  const loop = presetConfig.loop;
  const continuous = isContinuousSlider();
  const slides = sliderState.images
    .map(
      (image) => `
        <div class="swiper-slide">
          <img src="${image.url}" alt="${escapeHtml(image.name)}" />
        </div>`
    )
    .join("");
  const arrows = presetConfig.arrows && !continuous
    ? `
        <button class="${className}__arrow ${className}__arrow--prev" type="button" data-slider-prev aria-label="이전 슬라이드"></button>
        <button class="${className}__arrow ${className}__arrow--next" type="button" data-slider-next aria-label="다음 슬라이드"></button>`
    : "";
  const navigation = continuous ? "" : buildSwiperNavigationMarkup(className, presetConfig.navigationType, {
    images: sliderState.images,
    usePreviewUrls: true,
  });
  const scrollbar = presetConfig.scrollbar
    ? `
      <div class="${className}__scrollbar"></div>`
    : "";

  sliderPreview.className = "slider-preview";
  sliderPreview.innerHTML = `
    <div class="${className} swiper" data-slider-preview data-preset="${preset}" data-direction="${presetConfig.direction}">
      <div class="swiper-wrapper">
        ${slides}
      </div>
      ${arrows}
      ${navigation}
      ${scrollbar}
    </div>`;

  sliderMeta.textContent = `슬라이드 ${sliderState.images.length}개 · Swiper · ${getSwiperPresetLabel(
    preset
  )}${loop ? " · 무한 반복" : ""}`;

  initializeSliderPreviewSwiper(className, presetConfig);
}

function handleSliderPreviewClick(event) {
  const target = event.target;
  if (!(target instanceof HTMLElement) || !sliderState.images.length) {
    return;
  }

  if (target.closest("[data-slider-prev]")) {
    moveSliderPreview(-1);
    return;
  }

  if (target.closest("[data-slider-next]")) {
    moveSliderPreview(1);
    return;
  }

  const dot = target.closest("[data-slider-dot]");
  if (dot instanceof HTMLElement) {
    sliderState.currentIndex = Number(dot.dataset.sliderDot || 0);
    applySliderPreviewState();
  }
}

function moveSliderPreview(delta) {
  if (!sliderState.images.length) {
    return;
  }

  if (sliderState.previewSwiper) {
    if (delta > 0) {
      sliderState.previewSwiper.slideNext();
    } else {
      sliderState.previewSwiper.slidePrev();
    }
    return;
  }

  sliderState.currentIndex =
    (sliderState.currentIndex + delta + sliderState.images.length) % sliderState.images.length;
  applySliderPreviewState();
}

function destroySliderPreviewSwiper() {
  if (!sliderState.previewSwiper) {
    return;
  }

  sliderState.previewSwiper.destroy(true, true);
  sliderState.previewSwiper = null;
}

function loadSwiperLibrary() {
  if (window.Swiper) {
    return Promise.resolve();
  }

  return new Promise((resolve, reject) => {
    if (!document.querySelector('link[data-swiper-cdn]')) {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = "https://cdn.jsdelivr.net/npm/swiper@12/swiper-bundle.min.css";
      link.dataset.swiperCdn = "true";
      document.head.appendChild(link);
    }

    const existingScript = document.querySelector('script[data-swiper-cdn]');
    if (existingScript) {
      existingScript.addEventListener("load", resolve, { once: true });
      existingScript.addEventListener("error", reject, { once: true });
      return;
    }

    const script = document.createElement("script");
    script.src = "https://cdn.jsdelivr.net/npm/swiper@12/swiper-bundle.min.js";
    script.dataset.swiperCdn = "true";
    script.onload = resolve;
    script.onerror = reject;
    document.head.appendChild(script);
  });
}

function initializeSliderPreviewSwiper(className, presetConfig) {
  const slider = sliderPreview?.querySelector("[data-slider-preview]");
  if (!slider) {
    return;
  }

  loadSwiperLibrary()
    .then(() => {
      const options = buildSwiperOptionsForElement(slider, className, presetConfig, {
        interval: presetConfig.interval,
        loop: presetConfig.loop && sliderState.images.length > 1,
        autoplay: presetConfig.autoplay,
      });
      sliderState.previewSwiper = new window.Swiper(slider, options);
      bindSwiperThumbButtons(sliderState.previewSwiper, slider);
      applyContinuousSwiperTiming(sliderState.previewSwiper, slider, options);
    })
    .catch(() => {
      sliderStatus.textContent =
        "Swiper CDN을 불러오지 못했습니다. 인터넷 연결 후 다시 확인해 주세요.";
    });
}

function buildSwiperOptionsForElement(slider, className, presetConfig, settings) {
  const continuous = settings.loop && presetConfig.effect === "slide";
  const options = {
    effect: presetConfig.effect,
    direction: presetConfig.direction,
    loop: settings.loop,
    speed: continuous ? settings.interval : presetConfig.speed,
    slidesPerView: presetConfig.slidesPerView,
    spaceBetween: presetConfig.spaceBetween,
    centeredSlides: presetConfig.centeredSlides,
    freeMode: presetConfig.freeMode,
    autoHeight: presetConfig.autoHeight,
    grabCursor: true,
  };

  if (presetConfig.effect === "coverflow") {
    options.coverflowEffect = {
      rotate: 45,
      stretch: 0,
      depth: 120,
      modifier: 1,
      slideShadows: true,
    };
  }

  if (settings.autoplay) {
    options.autoplay = {
      delay: continuous ? 0 : settings.interval,
      disableOnInteraction: false,
    };
  }

  if (continuous) {
    options.allowTouchMove = false;
    options.freeMode = true;
  }

  const prevEl = slider.querySelector(`.${className}__arrow--prev`);
  const nextEl = slider.querySelector(`.${className}__arrow--next`);
  if (prevEl && nextEl) {
    options.navigation = { prevEl, nextEl };
  }

  const paginationEl = slider.querySelector(`.${className}__pagination`);
  if (paginationEl && presetConfig.navigationType !== "thumbnails") {
    options.pagination = {
      el: paginationEl,
      clickable: true,
      dynamicBullets: presetConfig.navigationType === "dynamic",
      type:
        presetConfig.navigationType === "counter"
          ? "fraction"
          : presetConfig.navigationType === "progress"
            ? "progressbar"
            : "bullets",
    };
  }

  const scrollbarEl = slider.querySelector(`.${className}__scrollbar`);
  if (scrollbarEl) {
    options.scrollbar = {
      el: scrollbarEl,
      draggable: true,
    };
  }

  return options;
}

function bindSwiperThumbButtons(swiper, slider) {
  const thumbs = Array.from(slider.querySelectorAll("[data-swiper-thumb]"));
  thumbs.forEach((thumb) => {
    thumb.addEventListener("click", () => {
      swiper.slideTo(Number(thumb.dataset.swiperThumb || 0));
    });
  });
  swiper.on("slideChange", () => {
    thumbs.forEach((thumb, index) => {
      thumb.classList.toggle("is-active", index === swiper.realIndex);
    });
  });
}

function applyContinuousSwiperTiming(swiper, slider, options) {
  if (!options.loop || options.effect !== "slide" || !options.autoplay) {
    return;
  }

  const wrapper = slider.querySelector(".swiper-wrapper");
  if (wrapper) {
    wrapper.style.transitionTimingFunction = "linear";
  }
  swiper.on("setTransition", (_swiper, duration) => {
    if (duration > 0 && wrapper) {
      wrapper.style.transitionTimingFunction = "linear";
    }
  });
}

function applySliderPreviewState() {
  if (!sliderPreview || !sliderState.images.length) {
    return;
  }

  const className = getSliderClassName();
  const presetConfig = getSwiperPresetConfig(getSliderSwiperPreset());
  const slides = sliderPreview.querySelectorAll(`[class~="${className}__slide"]`);
  const dots = sliderPreview.querySelectorAll("[data-slider-dot]");
  const counterCurrent = sliderPreview.querySelector("[data-slider-current]");
  const progressBar = sliderPreview.querySelector("[data-slider-progress]");
  const track = sliderPreview.querySelector(`[class~="${className}__track"]`);

  slides.forEach((slide, index) => {
    slide.classList.toggle("is-active", index === sliderState.currentIndex);
  });
  dots.forEach((dot, index) => {
    dot.classList.toggle("is-active", index === sliderState.currentIndex);
  });
  if (counterCurrent) {
    counterCurrent.textContent = String(sliderState.currentIndex + 1);
  }
  if (progressBar) {
    progressBar.style.width =
      ((sliderState.currentIndex + 1) / sliderState.images.length) * 100 + "%";
  }
  if (track) {
    track.style.transform =
      presetConfig.effect === "slide" ? `translateX(${sliderState.currentIndex * -100}%)` : "";
  }

  sliderMeta.textContent = `슬라이드 ${sliderState.images.length}개 · 현재 ${
    sliderState.currentIndex + 1
  }번째 이미지 · Swiper · ${getSwiperPresetLabel(getSliderSwiperPreset())} · ${getSliderNavigationLabel(
    presetConfig.navigationType
  )} · ${getSliderTransitionLabel(presetConfig.effect)}${presetConfig.loop ? " · 무한 반복" : ""}`;
}

function updateSliderSources() {
  if (!sliderHtmlCode || !sliderCssCode || !sliderJsCode) {
    return;
  }

  if (!sliderState.sliders.some((slider) => slider.images.length)) {
    sliderState.generated = { html: "", css: "", js: "" };
    sliderHtmlCode.textContent = "";
    sliderCssCode.textContent = "";
    sliderJsCode.textContent = "";
    return;
  }

  sliderState.generated = buildAllSliderSources();
  sliderHtmlCode.textContent = sliderState.generated.html;
  sliderCssCode.textContent = sliderState.generated.css;
  sliderJsCode.textContent = sliderState.generated.js;
}

function updateSliderControls() {
  const hasImages = sliderState.sliders.some((slider) => slider.images.length > 0);
  const activeHasImages = sliderState.images.length > 0;
  if (clearSliderImagesButton) {
    clearSliderImagesButton.disabled = !activeHasImages;
  }
  [
    copySliderHtmlButton,
    copySliderCssButton,
    copySliderJsButton,
    copySliderAllButton,
    copySliderHtmlInlineButton,
    copySliderCssInlineButton,
    copySliderJsInlineButton,
  ].forEach((button) => {
    if (button) {
      button.disabled = !hasImages;
    }
  });
}

function buildSliderSource() {
  return buildSwiperSliderSource(getActiveSliderItem());
}

function buildAllSliderSources() {
  const sources = sliderState.sliders
    .filter((slider) => slider.images.length)
    .map((slider) => ({
      slider,
      source: buildSwiperSliderSource(slider),
    }));

  return {
    html: sources
      .map(({ slider, source }) => `<!-- ${slider.className} -->\n${source.html}`)
      .join("\n\n"),
    css: sources
      .map(({ slider, source }) => `/* ${slider.className} */\n${source.css}`)
      .join("\n\n"),
    js: `<!-- Swiper JS -->
<script src="https://cdn.jsdelivr.net/npm/swiper@12/swiper-bundle.min.js"></script>

${sources
  .map(({ slider, source }) => `<!-- ${slider.className} -->\n${source.jsInit}`)
  .join("\n\n")}`,
  };
}

function buildCustomSliderSource() {
  const className = getSliderClassName();
  const showArrows = sliderArrowsInput?.checked ?? true;
  const navigationType = getSliderNavigationType();
  const transitionType = getSliderTransitionType();
  const autoplay = sliderAutoplayInput?.checked ?? true;
  const loop = getSliderLoop() && transitionType === "slide" && sliderState.images.length > 1;
  const interval = getSliderInterval();
  const sourceSlides = loop ? [...sliderState.images, ...sliderState.images] : sliderState.images;
  const slides = sourceSlides
    .map(
      (image, index) => `    <div class="${className}__slide${
        index === 0 ? " is-active" : ""
      }${image.clone ? ` ${className}__slide--clone` : ""}">
      <img src="./images/${escapeHtml(sanitizeExportFileName(image.name))}" alt="${escapeHtml(
        getSliderAltText(image.name)
      )}" />
    </div>`
    )
    .join("\n");
  const arrows = showArrows && !loop
    ? `
    <button class="${className}__arrow ${className}__arrow--prev" type="button" data-slider-prev aria-label="이전 슬라이드"></button>
    <button class="${className}__arrow ${className}__arrow--next" type="button" data-slider-next aria-label="다음 슬라이드"></button>`
    : "";
  const navigation = loop
    ? ""
    : buildSliderNavigationMarkup(className, navigationType, {
        images: sliderState.images,
        currentIndex: 0,
        usePreviewUrls: false,
      });

  const trackStyle = loop ? ` style="--slider-duration: ${getContinuousSliderDuration()}ms;"` : "";
  const html = `<div class="${className} ${className}--${transitionType}${
    loop ? ` ${className}--continuous` : ""
  }" data-slider data-autoplay="${autoplay}" data-interval="${interval}" data-loop="${loop}">
  <div class="${className}__viewport">
    <div class="${className}__track"${trackStyle}>
${slides}
    </div>${arrows}
  </div>${navigation}
</div>`;

  const css = `@import url("https://cdn.jsdelivr.net/npm/swiper@12/swiper-bundle.min.css");

.${className} {
  position: relative;
  width: 100%;
  overflow: hidden;
}

.${className}__viewport {
  position: relative;
  overflow: hidden;
}

.${className}__track {
  position: relative;
}

.${className}--slide .${className}__track {
  display: flex;
  transition: transform 420ms ease;
}

.${className}--continuous .${className}__track {
  animation: ${className}-continuous-slide var(--slider-duration, 12000ms) linear infinite;
  transition: none;
}

.${className}--continuous:hover .${className}__track {
  animation-play-state: paused;
}

.${className}__slide {
  display: none;
}

.${className}__slide.is-active {
  display: block;
}

.${className}--slide .${className}__slide {
  display: block;
  width: 100%;
  flex: 0 0 100%;
}

.${className}--continuous .${className}__slide {
  width: 100vw;
}

.${className}__slide img {
  display: block;
  width: 100%;
  height: auto;
}

@keyframes ${className}-continuous-slide {
  from {
    transform: translateX(0);
  }

  to {
    transform: translateX(-50%);
  }
}

.${className}__arrow {
  position: absolute;
  top: 50%;
  z-index: 2;
  width: 42px;
  height: 42px;
  padding: 0;
  box-sizing: border-box;
  border: 0;
  border-radius: 50%;
  background: rgba(17, 17, 17, 0.55);
  cursor: pointer;
  transform: translateY(-50%);
}

.${className}__arrow::before {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  width: 10px;
  height: 10px;
  border-top: 2px solid #fff;
  border-left: 2px solid #fff;
}

.${className}__arrow--prev {
  left: 16px;
}

.${className}__arrow--prev::before {
  transform: translate(-35%, -50%) rotate(-45deg);
}

.${className}__arrow--next {
  right: 16px;
}

.${className}__arrow--next::before {
  transform: translate(-65%, -50%) rotate(135deg);
}

.${className}__dots {
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-top: 14px;
}

.${className}__dot {
  width: 9px;
  height: 9px;
  padding: 0;
  border: 0;
  border-radius: 999px;
  background: #c7c7c7;
  cursor: pointer;
}

.${className}__dot.is-active {
  width: 24px;
  background: #111;
}

.${className}__counter {
  margin-top: 14px;
  color: #111;
  font-size: 14px;
  font-weight: 700;
  text-align: center;
}

.${className}__progress {
  position: relative;
  height: 3px;
  margin-top: 14px;
  overflow: hidden;
  background: #e5e5e5;
}

.${className}__progress-bar {
  display: block;
  width: 0;
  height: 100%;
  background: #111;
  transition: width 320ms ease;
}

.${className}__thumbs {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(54px, 1fr));
  gap: 8px;
  margin-top: 14px;
}

.${className}__thumb {
  padding: 0;
  border: 2px solid transparent;
  background: transparent;
  cursor: pointer;
}

.${className}__thumb.is-active {
  border-color: #111;
}

.${className}__thumb img {
  display: block;
  width: 100%;
  aspect-ratio: 1 / 1;
  object-fit: cover;
}`;

  const js = `document.querySelectorAll("[data-slider]").forEach((slider) => {
  const slides = Array.from(slider.querySelectorAll(".${className}__slide"));
  const dots = Array.from(slider.querySelectorAll("[data-slider-dot]"));
  const counterCurrent = slider.querySelector("[data-slider-current]");
  const progressBar = slider.querySelector("[data-slider-progress]");
  const prevButton = slider.querySelector("[data-slider-prev]");
  const nextButton = slider.querySelector("[data-slider-next]");
  const autoplay = slider.dataset.autoplay === "true";
  const loop = slider.dataset.loop === "true" && slider.classList.contains("${className}--slide");
  const continuous = slider.classList.contains("${className}--continuous");
  const interval = Number(slider.dataset.interval || ${interval});
  let currentIndex = 0;
  let visualIndex = 0;
  let timerId = null;

  const getRealIndex = () => {
    if (!loop) return currentIndex;
    if (currentIndex === 0) return slides.length - 3;
    if (currentIndex === slides.length - 1) return 0;
    return currentIndex - 1;
  };

  const syncNavigation = () => {
    visualIndex = getRealIndex();
    slides.forEach((slide, slideIndex) => {
      slide.classList.toggle("is-active", slideIndex === currentIndex);
    });
    dots.forEach((dot, dotIndex) => {
      dot.classList.toggle("is-active", dotIndex === visualIndex);
    });
    if (counterCurrent) {
      counterCurrent.textContent = String(visualIndex + 1);
    }
    if (progressBar) {
      progressBar.style.width = ((visualIndex + 1) / ${sliderState.images.length}) * 100 + "%";
    }
  };

  const jumpWithoutAnimation = (index) => {
    const track = slider.querySelector(".${className}__track");
    if (!track) return;
    track.style.transition = "none";
    currentIndex = index;
    track.style.transform = "translateX(" + currentIndex * -100 + "%)";
    syncNavigation();
    track.offsetHeight;
    track.style.transition = "";
  };

  const showSlide = (index, options = {}) => {
    if (!slides.length) return;
    if (continuous) return;
    currentIndex = loop ? index : (index + slides.length) % slides.length;
    if (slider.classList.contains("${className}--slide")) {
      const track = slider.querySelector(".${className}__track");
      if (track) {
        track.style.transform = "translateX(" + currentIndex * -100 + "%)";
        if (loop && !options.skipLoopFix) {
          track.addEventListener(
            "transitionend",
            () => {
              if (currentIndex === 0) {
                jumpWithoutAnimation(slides.length - 2);
              } else if (currentIndex === slides.length - 1) {
                jumpWithoutAnimation(1);
              }
            },
            { once: true }
          );
      }
    }
    }
    syncNavigation();
  };

  const move = (delta) => {
    showSlide(currentIndex + delta);
  };

  const restart = () => {
    if (continuous || !autoplay || slides.length < 2) return;
    window.clearInterval(timerId);
    timerId = window.setInterval(() => move(1), interval);
  };

  prevButton?.addEventListener("click", () => {
    move(-1);
    restart();
  });

  nextButton?.addEventListener("click", () => {
    move(1);
    restart();
  });

  dots.forEach((dot) => {
    dot.addEventListener("click", () => {
      showSlide(Number(dot.dataset.sliderDot || 0) + (loop ? 1 : 0));
      restart();
    });
  });

  showSlide(loop ? 1 : 0, { skipLoopFix: true });
  restart();
});`;

  return { html, css, js };
}

function buildSwiperSliderSource(slider = getActiveSliderItem()) {
  const className = getSliderClassName(slider?.className);
  const preset = getSliderSwiperPreset(slider);
  const presetConfig = getSwiperPresetConfig(preset, slider?.options);
  const autoplay = presetConfig.autoplay;
  const images = slider?.images ?? [];
  const loop = presetConfig.loop && presetConfig.effect === "slide" && images.length > 1;
  const interval = presetConfig.interval;
  const slides = images
    .map(
      (image) => `    <div class="swiper-slide">
      <img src="./images/${escapeHtml(sanitizeExportFileName(image.name))}" alt="${escapeHtml(
        getSliderAltText(image.name)
      )}" />
    </div>`
    )
    .join("\n");
  if (preset === "multi-view") {
    return buildSwiperDemoSource({
      className,
      preset,
      presetConfig,
      slides,
      css: buildSlidesPerViewCss(className),
      options: buildSwiperInitOptionsSource(className, presetConfig, {
        interval,
        loop,
      }),
    });
  }
  const arrows = presetConfig.arrows && !presetConfig.continuous
    ? `
    <button class="${className}__arrow ${className}__arrow--prev" type="button" aria-label="이전 슬라이드"></button>
    <button class="${className}__arrow ${className}__arrow--next" type="button" aria-label="다음 슬라이드"></button>`
    : "";
  const navigation = presetConfig.continuous
    ? ""
    : buildSwiperNavigationMarkup(className, presetConfig.navigationType);
  const scrollbar = presetConfig.scrollbar
    ? `
  <div class="${className}__scrollbar"></div>`
    : "";

  const html = `<div class="${className} swiper" data-swiper-slider data-preset="${preset}" data-effect="${presetConfig.effect}" data-direction="${presetConfig.direction}" data-slides-per-view="${presetConfig.slidesPerView}" data-space-between="${presetConfig.spaceBetween}" data-centered="${presetConfig.centeredSlides}" data-free-mode="${presetConfig.freeMode}" data-auto-height="${presetConfig.autoHeight}" data-autoplay="${autoplay}" data-interval="${interval}" data-navigation="${presetConfig.navigationType}" data-loop="${loop}">
  <div class="swiper-wrapper">
${slides}
  </div>${arrows}${navigation}${scrollbar}
</div>`;

  const css = `.${className} {
  position: relative;
  width: 100%;
  overflow: hidden;
}

.${className}[data-direction="vertical"] {
  height: 560px;
}

.${className} .swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.${className}[data-slides-per-view="auto"] .swiper-slide {
  width: 72%;
}

.${className}[data-preset="multi-view"] .swiper-slide {
  min-width: 0;
}

.${className}__arrow {
  position: absolute;
  top: 50%;
  z-index: 10;
  width: 42px;
  height: 42px;
  padding: 0;
  box-sizing: border-box;
  border: 0;
  border-radius: 50%;
  background: rgba(17, 17, 17, 0.55);
  cursor: pointer;
  transform: translateY(-50%);
}

.${className}__arrow::before {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  width: 10px;
  height: 10px;
  border-top: 2px solid #fff;
  border-left: 2px solid #fff;
}

.${className}__arrow--prev {
  left: 16px;
}

.${className}__arrow--prev::before {
  transform: translate(-35%, -50%) rotate(-45deg);
}

.${className}__arrow--next {
  right: 16px;
}

.${className}__arrow--next::before {
  transform: translate(-65%, -50%) rotate(135deg);
}

.${className}__pagination {
  position: static;
  display: flex;
  justify-content: center;
  gap: 8px;
  width: 100%;
  margin-top: 14px;
  text-align: center;
}

.${className}__pagination .swiper-pagination-bullet {
  width: 9px;
  height: 9px;
  margin: 0;
  background: #c7c7c7;
  opacity: 1;
}

.${className}__pagination .swiper-pagination-bullet-active {
  width: 24px;
  border-radius: 999px;
  background: #111;
}

.${className}__pagination.swiper-pagination-fraction {
  color: #111;
  font-size: 14px;
  font-weight: 700;
}

.${className}__pagination.swiper-pagination-progressbar {
  position: relative;
  height: 3px;
  margin-top: 14px;
  background: #e5e5e5;
}

.${className}__pagination .swiper-pagination-progressbar-fill {
  background: #111;
}

.${className}__scrollbar {
  position: relative;
  height: 4px;
  margin-top: 14px;
  border-radius: 999px;
  background: #e5e5e5;
}

.${className}__scrollbar .swiper-scrollbar-drag {
  background: #111;
}

.${className}__thumbs {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(54px, 1fr));
  gap: 8px;
  margin-top: 14px;
}

.${className}__thumb {
  padding: 0;
  border: 2px solid transparent;
  background: transparent;
  cursor: pointer;
}

.${className}__thumb.is-active {
  border-color: #111;
}

.${className}__thumb img {
  display: block;
  width: 100%;
  aspect-ratio: 1 / 1;
  object-fit: cover;
}`;

  const js = buildSwiperScriptSource(
    className,
    buildSwiperInitOptionsSource(className, presetConfig, {
      interval,
      loop,
    })
  );
  const jsInit = buildSwiperInitScriptSource(
    className,
    buildSwiperInitOptionsSource(className, presetConfig, {
      interval,
      loop,
    })
  );

  return { html, css, js, jsInit };
}

function buildSwiperDemoSource({ className, preset, presetConfig, slides, css, options }) {
  const navigation = buildSwiperNavigationMarkup(className, presetConfig.navigationType);
  const html = `<div class="swiper ${className}" data-swiper-slider data-preset="${preset}">
  <div class="swiper-wrapper">
${slides}
  </div>${navigation}
</div>`;
  const js = buildSwiperScriptSource(className, options);
  const jsInit = buildSwiperInitScriptSource(className, options);

  return { html, css, js, jsInit };
}

function buildSwiperScriptSource(className, options) {
  return `<!-- Swiper JS -->
<script src="https://cdn.jsdelivr.net/npm/swiper@12/swiper-bundle.min.js"></script>

${buildSwiperInitScriptSource(className, options)}`;
}

function buildSwiperInitScriptSource(className, options) {
  return `<!-- Initialize Swiper -->
<script>
  var ${toSafeVariableName(className)} = new Swiper(".${className}", ${options});
</script>`;
}

function toSafeVariableName(className) {
  const name = String(className || "swiper")
    .replaceAll(/[^a-zA-Z0-9_$]/g, "_")
    .replaceAll(/_+/g, "_");
  return /^[a-zA-Z_$]/.test(name) ? `${name}Swiper` : `swiper${name}Swiper`;
}

function buildSwiperInitOptionsSource(className, presetConfig, settings = {}) {
  const interval = settings.interval ?? presetConfig.interval ?? 3000;
  const loop = settings.loop ?? presetConfig.loop;
  const continuous = presetConfig.continuous && loop && presetConfig.effect === "slide";
  const options = [
    `effect: "${presetConfig.effect}"`,
    `direction: "${presetConfig.direction}"`,
    `loop: ${loop}`,
    `speed: ${continuous ? interval : presetConfig.speed}`,
    `slidesPerView: ${
      presetConfig.slidesPerView === "auto" ? `"auto"` : presetConfig.slidesPerView
    }`,
    `spaceBetween: ${presetConfig.spaceBetween}`,
    `centeredSlides: ${presetConfig.centeredSlides}`,
    `freeMode: ${continuous || presetConfig.freeMode}`,
    `autoHeight: ${presetConfig.autoHeight}`,
    `grabCursor: true`,
  ];

  if (presetConfig.effect === "coverflow") {
    options.push(`coverflowEffect: {
    rotate: 45,
    stretch: 0,
    depth: 120,
    modifier: 1,
    slideShadows: true,
  }`);
  }

  if (presetConfig.autoplay) {
    options.push(`autoplay: {
    delay: ${continuous ? 0 : interval},
    disableOnInteraction: false,
  }`);
  }

  if (continuous) {
    options.push(`allowTouchMove: false`);
    options.push(`on: {
    init: function () {
      this.wrapperEl.style.transitionTimingFunction = "linear";
    },
    setTransition: function () {
      this.wrapperEl.style.transitionTimingFunction = "linear";
    },
  }`);
  }

  if (presetConfig.arrows && !presetConfig.continuous) {
    options.push(`navigation: {
    nextEl: ".${className}__arrow--next",
    prevEl: ".${className}__arrow--prev",
  }`);
  }

  if (presetConfig.navigationType && presetConfig.navigationType !== "none" && presetConfig.navigationType !== "thumbnails") {
    options.push(`pagination: {
    el: ".${className}__pagination",
    clickable: true,
    dynamicBullets: ${presetConfig.navigationType === "dynamic"},
    type: "${
      presetConfig.navigationType === "counter"
        ? "fraction"
        : presetConfig.navigationType === "progress"
          ? "progressbar"
          : "bullets"
    }",
  }`);
  }

  if (presetConfig.scrollbar) {
    options.push(`scrollbar: {
    el: ".${className}__scrollbar",
    draggable: true,
  }`);
  }

  return `{
  ${options.join(",\n  ")}
}`;
}

function buildSlidesPerViewCss(className) {
  return `@import url("https://cdn.jsdelivr.net/npm/swiper@12/swiper-bundle.min.css");

.${className} {
  width: 100%;
  height: 100%;
}

.${className} .swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #444;
  display: flex;
  justify-content: center;
  align-items: center;
}

.${className} .swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.${className}__pagination {
  position: static;
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 14px;
  text-align: center;
}`;
}

function buildSliderNavigationMarkup(className, navigationType, options) {
  const { images, currentIndex, usePreviewUrls } = options;

  if (navigationType === "none") {
    return "";
  }

  if (navigationType === "counter") {
    return `
  <div class="${className}__counter" aria-live="polite">
    <span data-slider-current>${currentIndex + 1}</span> / <span>${images.length}</span>
  </div>`;
  }

  if (navigationType === "progress") {
    const width = images.length ? ((currentIndex + 1) / images.length) * 100 : 0;
    return `
  <div class="${className}__progress" aria-hidden="true">
    <span class="${className}__progress-bar" data-slider-progress style="width: ${width}%;"></span>
  </div>`;
  }

  if (navigationType === "thumbnails") {
    return `
  <div class="${className}__thumbs">
${images
  .map((image, index) => {
    const src = usePreviewUrls ? image.url : `./images/${sanitizeExportFileName(image.name)}`;
    return `    <button class="${className}__thumb${
      index === currentIndex ? " is-active" : ""
    }" type="button" data-slider-dot="${index}" aria-label="${index + 1}번 슬라이드">
      <img src="${escapeHtml(src)}" alt="${escapeHtml(getSliderAltText(image.name))}" />
    </button>`;
  })
  .join("\n")}
  </div>`;
  }

  return `
  <div class="${className}__dots">
${images
  .map(
    (_, index) =>
      `    <button class="${className}__dot${
        index === currentIndex ? " is-active" : ""
      }" type="button" data-slider-dot="${index}" aria-label="${index + 1}번 슬라이드"></button>`
  )
  .join("\n")}
  </div>`;
}

function buildSwiperNavigationMarkup(className, navigationType, options = {}) {
  const images = options.images ?? sliderState.images;
  const usePreviewUrls = options.usePreviewUrls ?? false;

  if (navigationType === "none") {
    return "";
  }

  if (navigationType === "thumbnails") {
    return `
  <div class="${className}__thumbs">
${images
  .map(
    (image, index) => {
      const src = usePreviewUrls ? image.url : `./images/${sanitizeExportFileName(image.name)}`;
      return `    <button class="${className}__thumb${
        index === 0 ? " is-active" : ""
      }" type="button" data-swiper-thumb="${index}" aria-label="${index + 1}번 슬라이드">
      <img src="${escapeHtml(src)}" alt="${escapeHtml(getSliderAltText(image.name))}" />
    </button>`
    }
  )
  .join("\n")}
  </div>`;
  }

  return `
  <div class="${className}__pagination"></div>`;
}

function getBaseSwiperPresetConfig(preset) {
  const config = {
    effect: "slide",
    direction: "horizontal",
    navigationType: "none",
    slidesPerView: 1,
    spaceBetween: 0,
    speed: 420,
    centeredSlides: false,
    freeMode: false,
    autoHeight: false,
    scrollbar: false,
    arrows: false,
    autoplay: false,
    loop: false,
    continuous: false,
    interval: 3000,
  };

  if (preset === "navigation") {
    config.arrows = true;
  }
  if (preset === "pagination") {
    config.navigationType = "dots";
  }
  if (preset === "dynamic-pagination") {
    config.navigationType = "dynamic";
  }
  if (preset === "scrollbar") {
    config.navigationType = "none";
    config.scrollbar = true;
  }
  if (preset === "autoplay") {
    config.navigationType = "dots";
    config.autoplay = true;
  }
  if (preset === "loop") {
    config.navigationType = "dots";
    config.loop = true;
  }
  if (preset === "continuous") {
    config.autoplay = true;
    config.loop = true;
    config.continuous = true;
    config.interval = 6000;
  }
  if (preset === "vertical") {
    config.direction = "vertical";
  }
  if (preset === "free-mode") {
    config.slidesPerView = "auto";
    config.spaceBetween = 16;
    config.freeMode = true;
  }
  if (preset === "centered") {
    config.slidesPerView = "auto";
    config.spaceBetween = 16;
    config.centeredSlides = true;
  }
  if (preset === "multi-view") {
    config.slidesPerView = 3;
    config.spaceBetween = 30;
    config.navigationType = "dots";
  }
  if (preset === "auto-height") {
    config.autoHeight = true;
  }
  if (["fade", "cube", "coverflow", "flip", "cards"].includes(preset)) {
    config.effect = preset;
  }
  if (preset === "coverflow") {
    config.slidesPerView = "auto";
    config.centeredSlides = true;
    config.spaceBetween = 16;
  }
  if (preset === "thumbs") {
    config.navigationType = "thumbnails";
  }

  return config;
}

function getSwiperPresetConfig(preset, settings = null) {
  const config = getBaseSwiperPresetConfig(preset);
  const slidesPerView = settings?.slidesPerView ?? sliderSlidesPerViewInput?.value ?? String(config.slidesPerView);
  const spaceBetween = Number(settings?.spaceBetween ?? sliderSpaceBetweenInput?.value ?? config.spaceBetween);
  const speed = Number(settings?.speed ?? sliderSpeedInput?.value ?? config.speed);
  const interval = Number(settings?.interval ?? sliderIntervalInput?.value ?? config.interval);
  const direction = settings?.direction ?? sliderDirectionInput?.value ?? config.direction;
  const navigationType = settings?.pagination ?? sliderPaginationInput?.value ?? config.navigationType;

  config.slidesPerView = slidesPerView === "auto" ? "auto" : Number(slidesPerView || 1);
  config.spaceBetween = Math.max(0, spaceBetween);
  config.speed = Math.max(100, speed);
  config.interval = Math.max(0, interval);
  config.direction = direction === "vertical" ? "vertical" : "horizontal";
  config.navigationType = navigationType;
  config.autoplay = settings ? Boolean(settings.autoplay) : Boolean(sliderAutoplayOptionInput?.checked);
  config.loop = settings ? Boolean(settings.loop) : Boolean(sliderLoopOptionInput?.checked);
  config.arrows = settings ? Boolean(settings.arrows) : Boolean(sliderArrowsOptionInput?.checked);
  config.centeredSlides = settings
    ? Boolean(settings.centered)
    : Boolean(sliderCenteredOptionInput?.checked);

  config.scrollbar = navigationType === "scrollbar";
  if (config.scrollbar) {
    config.navigationType = "none";
  }
  if (config.navigationType === "thumbnails") {
    config.scrollbar = false;
  }
  if (config.effect !== "slide") {
    config.loop = false;
    config.continuous = false;
  }
  if (config.continuous) {
    config.autoplay = true;
    config.loop = true;
    config.arrows = false;
    config.navigationType = "none";
    config.scrollbar = false;
  }

  return config;
}

async function copySliderSource(type) {
  const value = sliderState.generated[type] ?? "";
  if (!value) {
    return;
  }

  await copyText(value);
  sliderStatus.textContent = `${type.toUpperCase()} 소스를 복사했습니다.`;
}

async function copyAllSliderSource() {
  const { html, css, js } = sliderState.generated;
  if (!html || !css || !js) {
    return;
  }

  await copyText(`<!-- HTML -->\n${html}\n\n/* CSS */\n${css}\n\n// JS\n${js}`);
  sliderStatus.textContent = "HTML/CSS/JS 전체 소스를 복사했습니다.";
}

async function copyText(value) {
  if (navigator.clipboard?.writeText) {
    await navigator.clipboard.writeText(value);
    return;
  }

  const textarea = document.createElement("textarea");
  textarea.value = value;
  textarea.setAttribute("readonly", "");
  textarea.style.position = "fixed";
  textarea.style.left = "-9999px";
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  textarea.remove();
}

function getSliderClassName(value = null) {
  const rawValue = value ?? sliderNameInput?.value ?? "promo-slider";
  const className = rawValue
    .trim()
    .replaceAll(/[^a-zA-Z0-9_-]/g, "-")
    .replaceAll(/-+/g, "-")
    .replaceAll(/^-|-$/g, "");

  if (!className) {
    return "promo-slider";
  }

  return /^[a-zA-Z_-]/.test(className) ? className : `slider-${className}`;
}

function getSliderInterval() {
  return getSwiperPresetConfig(getSliderSwiperPreset()).interval;
}

function getContinuousSliderDuration() {
  return Math.max(getSliderInterval() * Math.max(sliderState.images.length, 1), 4000);
}

function isContinuousSlider() {
  const presetConfig = getSwiperPresetConfig(getSliderSwiperPreset());
  return presetConfig.continuous && sliderState.images.length > 1;
}

function getSliderSwiperPreset(slider = null) {
  return slider?.preset || sliderSwiperPresetInput?.value || "basic";
}

function getSliderLoop() {
  return getSwiperPresetConfig(getSliderSwiperPreset()).loop;
}

function getSliderNavigationType() {
  return getSwiperPresetConfig(getSliderSwiperPreset()).navigationType;
}

function getSliderTransitionType() {
  return getSwiperPresetConfig(getSliderSwiperPreset()).effect;
}

function getSliderNavigationLabel(type) {
  return (
    {
      dots: "도트",
      counter: "숫자",
      progress: "프로그레스",
      thumbnails: "썸네일",
      none: "네비게이션 없음",
    }[type] || "도트"
  );
}

function getSliderTransitionLabel(type) {
  return type === "slide" ? "좌우 슬라이드" : "페이드";
}

function getSwiperPresetLabel(type) {
  return (
    {
      basic: "기본",
      pagination: "Pagination",
      "dynamic-pagination": "Dynamic Pagination",
      scrollbar: "Scrollbar",
      vertical: "Vertical",
      "free-mode": "Free Mode",
      centered: "Centered",
      "multi-view": "Slides Per View",
      "auto-height": "Auto Height",
      fade: "Fade",
      cube: "Cube",
      coverflow: "Coverflow",
      flip: "Flip",
      cards: "Cards",
      thumbs: "Thumbs",
    }[type] || "기본"
  );
}

function getSliderAltText(fileName) {
  return String(fileName || "slide").replace(/\.[^.]+$/, "");
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

  /*
  hotspotMeta.textContent =
    `${section.name} · PC 미리보기 ${section.desktopDisplayWidth} x ${section.desktopDisplayHeight}px ` +
    `(실제 ${section.desktopWidth} x ${section.desktopHeight}px) · ` +
    `Mobile ${section.mobileWidth} x ${section.mobileHeight}px`;
    */
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

function updateCsvDownloadAvailability() {
  if (csvDownloadButton) {
    csvDownloadButton.disabled = !csvState.csvText;
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

async function handleCsvMergeUpload() {
  const files = Array.from(csvMergeInput?.files ?? []);
  if (!files.length) {
    csvState.fileNames = [];
    csvState.csvText = "";
    csvState.rowCount = 0;
    csvState.columnCount = 0;
    csvMeta.textContent = "합쳐진 CSV 데이터 일부가 여기에 표시됩니다.";
    csvPreview.textContent = "아직 업로드된 CSV 파일이 없습니다.";
    csvStatus.textContent = "CSV 파일을 여러 개 업로드하면 합쳐진 데이터 미리보기가 표시됩니다.";
    updateCsvDownloadAvailability();
    return;
  }

  try {
    const parsedFiles = await Promise.all(
      files.map(async (file) => ({
        name: file.name,
        rows: parseCsvText(await file.text()),
      }))
    );
    const useHeader = Boolean(csvHeaderInput?.checked);
    const merged = useHeader ? mergeCsvFilesByHeader(parsedFiles) : mergeCsvFilesByRows(parsedFiles);

    csvState.fileNames = files.map((file) => file.name);
    csvState.csvText = serializeCsvRows(merged.rows);
    csvState.rowCount = merged.dataRowCount;
    csvState.columnCount = merged.columnCount;
    csvMeta.textContent = `${files.length}개 파일 · ${csvState.rowCount}개 행 · ${csvState.columnCount}개 컬럼`;
    csvPreview.textContent = csvState.csvText.slice(0, 12000);
    csvStatus.textContent = "CSV 파일을 하나로 합쳤습니다. 다운로드할 수 있습니다.";
  } catch (error) {
    csvState.fileNames = [];
    csvState.csvText = "";
    csvState.rowCount = 0;
    csvState.columnCount = 0;
    csvMeta.textContent = "합쳐진 CSV 데이터 일부가 여기에 표시됩니다.";
    csvPreview.textContent = "CSV 파일 합치기에 실패했습니다.";
    csvStatus.textContent = "CSV 파일을 읽는 중 오류가 발생했습니다. 파일 형식을 확인해 주세요.";
  } finally {
    updateCsvDownloadAvailability();
  }
}

function mergeCsvFilesByHeader(parsedFiles) {
  const headers = [];
  const records = [];

  parsedFiles.forEach((file) => {
    const rows = file.rows.filter((row) => row.some((cell) => cell !== ""));
    if (!rows.length) {
      return;
    }

    const fileHeaders = rows[0].map((header, index) => header || `column_${index + 1}`);
    fileHeaders.forEach((header) => {
      if (!headers.includes(header)) {
        headers.push(header);
      }
    });

    rows.slice(1).forEach((row) => {
      const record = {};
      fileHeaders.forEach((header, index) => {
        record[header] = row[index] ?? "";
      });
      records.push(record);
    });
  });

  const mergedRows = [headers, ...records.map((record) => headers.map((header) => record[header] ?? ""))];
  return {
    rows: mergedRows,
    dataRowCount: records.length,
    columnCount: headers.length,
  };
}

function mergeCsvFilesByRows(parsedFiles) {
  const rows = parsedFiles.flatMap((file) => file.rows).filter((row) => row.some((cell) => cell !== ""));
  const columnCount = rows.reduce((max, row) => Math.max(max, row.length), 0);
  return {
    rows,
    dataRowCount: rows.length,
    columnCount,
  };
}

function parseCsvText(text) {
  const csvText = String(text || "").replace(/^\uFEFF/, "");
  const rows = [];
  let row = [];
  let cell = "";
  let inQuotes = false;

  for (let index = 0; index < csvText.length; index += 1) {
    const char = csvText[index];
    const nextChar = csvText[index + 1];

    if (char === '"') {
      if (inQuotes && nextChar === '"') {
        cell += '"';
        index += 1;
      } else {
        inQuotes = !inQuotes;
      }
      continue;
    }

    if (char === "," && !inQuotes) {
      row.push(cell);
      cell = "";
      continue;
    }

    if ((char === "\n" || char === "\r") && !inQuotes) {
      if (char === "\r" && nextChar === "\n") {
        index += 1;
      }
      row.push(cell);
      rows.push(row);
      row = [];
      cell = "";
      continue;
    }

    cell += char;
  }

  row.push(cell);
  if (row.length > 1 || row[0] !== "") {
    rows.push(row);
  }

  return rows;
}

function serializeCsvRows(rows) {
  return rows
    .map((row) =>
      row
        .map((cell) => {
          const value = String(cell ?? "");
          return /[",\n\r]/.test(value) ? `"${value.replaceAll('"', '""')}"` : value;
        })
        .join(",")
    )
    .join("\n");
}

function downloadMergedCsv() {
  if (!csvState.csvText) {
    return;
  }

  const blob = new Blob(["\uFEFF", csvState.csvText], {
    type: "text/csv;charset=utf-8",
  });
  const downloadUrl = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  anchor.href = downloadUrl;
  anchor.download = "merged-csv.csv";
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
