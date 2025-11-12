

/* === ORIGINAL INLINE SCRIPTS === */

// This is a standalone file. pdfjsLib and Tesseract are loaded globally from CDN.
pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';

const translations = {
    en: {
        documents: 'Documents',
        files: 'Files',
        select_file_upload: 'Select a file to upload',
        file_types_supported: 'PDF, JPG, PNG SUPPORTED',
        clear_all_files: 'Clear All Files',
        previous: 'Previous',
        next: 'Next',
        no_document: 'No document',
        page_prefix: 'Page',
        reset: 'Reset',
        pan_tool: 'Pan Tool',
        add_divider: 'Add Divider',
        grid_tool: 'Grid Tool',
        clear_selections: 'Clear Selections',
        batch_mode_off: 'Batch Mode: OFF',
        batch_mode_on: 'Batch Mode: ON',
        no_document_loaded: 'No Document Loaded',
        empty_subtext: 'Upload a bank statement to get started. Click and drag to select regions for OCR, or use the Pan Tool to move around.',
        ocr_results: 'OCR Results',
        batch_info_title: 'Multi-Page Batch Processing',
        batch_info_subtitle: 'Selections are preserved across all pages',
        total_selections: 'Total Selections',
        pages_used: 'Pages Used',
        current_page: 'Current Page',
        results_placeholder: 'Select regions on the document to extract text with OCR. Results will appear here.',
        batch_ocr_button: 'OCR Text of Preserved Selections',
        process_grid: 'Process Grids',
        export_all: 'Export All',
        preferences: 'Preferences',
        result_cleaner: 'Result Cleaner',
        ocr_engine: 'OCR Engine',
        back: 'Back',
        theme: 'Theme',
        language: 'Language',
        selection_behavior: 'Selection Behavior',
        keep_selections_label: 'Keep previous selection boxes on screen',
        keep_selections_desc: 'By default, drawing a new box clears the old one. Check this to keep all boxes visible.',
        save_settings: 'Save Settings',
        cancel: 'Cancel',
        copy: 'Copy',
        processing: 'Processing...',
        selection: 'Selection',
        page: 'Page',
        coordinates: 'Coordinates',
        size: 'Size',
        ocr_only_whitelist: 'OCR Only (Whitelist)',
        enable_ocr_only: 'Enable OCR Only',
        ocr_only_desc: 'If enabled, OCR will only return text that matches an item on this list.',
        add_phrase_placeholder: 'Add phrase and press Enter...',
        word_phrase_replacements: 'Word & Phrase Replacements',
        find_text_placeholder: 'Find Text',
        replace_with_placeholder: 'Replace With',
        add_button: 'Add',
        filter_list: 'Filter List (Remove Words/Phrases)',
        add_item_placeholder: 'Add item and press Enter...',
        number_filtering: 'Number Filtering',
        remove_numbers_longer_than: 'Remove numbers longer than',
        digits: 'digits',
        reset_cleaner: 'Reset Cleaner',
        engine_desc: 'Provide a URL to your custom <code>.traineddata</code> file to improve accuracy on specific documents.',
        custom_lang_url: 'Custom Language URL',
        custom_lang_url_placeholder: 'URL to folder with .traineddata',
        custom_lang_code: 'Custom Language Code',
        custom_lang_code_placeholder: 'e.g., mybank (without extension)',
        selection_mode_title: 'Selection Mode',
        selection_mode_desc: 'Click and drag on the document to select an area for OCR. Results will appear below.',
        grid_tool_on_title: 'Grid Tool ON',
        grid_tool_on_desc: 'Draw your first cell to define the column, then click and drag to add more rows.',
        divider_tool_on_title: 'Add Divider ON',
        divider_tool_on_desc: 'Click on an existing selection box to add horizontal dividers. Press keys 1-9 to change divider size.',
    },
    es: {
        documents: 'Documentos',
        files: 'Archivos',
        select_file_upload: 'Seleccione un archivo para subir',
        file_types_supported: 'SOPORTA PDF, JPG, PNG',
        clear_all_files: 'Limpiar Todos los Archivos',
        previous: 'Anterior',
        next: 'Siguiente',
        no_document: 'Sin documento',
        page_prefix: 'Página',
        reset: 'Reiniciar',
        pan_tool: 'Herramienta de Paneo',
        add_divider: 'Añadir Divisor',
        grid_tool: 'Herramienta de Cuadrícula',
        clear_selections: 'Limpiar Selecciones',
        batch_mode_off: 'Modo Lote: APAGADO',
        batch_mode_on: 'Modo Lote: ENCENDIDO',
        no_document_loaded: 'Ningún Documento Cargado',
        empty_subtext: 'Suba un extracto bancario para comenzar. Haga clic y arrastre para seleccionar regiones para OCR, o use la Herramienta de Paneo para moverse.',
        ocr_results: 'Resultados de OCR',
        batch_info_title: 'Procesamiento por Lotes',
        batch_info_subtitle: 'Las selecciones se conservan en todas las páginas',
        total_selections: 'Selecciones Totales',
        pages_used: 'Páginas Usadas',
        current_page: 'Página Actual',
        results_placeholder: 'Seleccione regiones en el documento para extraer texto con OCR. Los resultados aparecerán aquí.',
        batch_ocr_button: 'Procesar Selecciones de Lote con OCR',
        process_grid: 'Procesar Cuadrículas',
        export_all: 'Exportar Todo',
        preferences: 'Preferencias',
        result_cleaner: 'Limpiador de Resultados',
        ocr_engine: 'Motor de OCR',
        back: 'Atrás',
        theme: 'Tema',
        language: 'Idioma',
        selection_behavior: 'Comportamiento de Selección',
        keep_selections_label: 'Mantener los cuadros de selección anteriores',
        keep_selections_desc: 'Por defecto, un cuadro nuevo borra los anteriores. Marque esta opción para mantenerlos todos.',
        save_settings: 'Guardar Cambios',
        cancel: 'Cancelar',
        copy: 'Copiar',
        processing: 'Procesando...',
        selection: 'Selección',
        page: 'Página',
        coordinates: 'Coordenadas',
        size: 'Tamaño',
        ocr_only_whitelist: 'Solo OCR (Lista blanca)',
        enable_ocr_only: 'Activar "Solo OCR"',
        ocr_only_desc: 'Si se activa, el OCR solo reconocerá el texto que esté en esta lista.',
        add_phrase_placeholder: 'Añadir texto y presionar Enter...',
        word_phrase_replacements: 'Reemplazar Palabras y Frases',
        find_text_placeholder: 'Buscar texto',
        replace_with_placeholder: 'Reemplazar con',
        add_button: 'Añadir',
        filter_list: 'Lista de filtros (ignorar palabras)',
        add_item_placeholder: 'Añadir y presionar Enter...',
        number_filtering: 'Filtro de números',
        remove_numbers_longer_than: 'Quitar números de más de',
        digits: 'dígitos',
        reset_cleaner: 'Reiniciar limpiador',
        engine_desc: 'Use una URL a su archivo <code>.traineddata</code> personalizado para mejorar la precisión.',
        custom_lang_url: 'URL de idioma personalizado',
        custom_lang_url_placeholder: 'URL a la carpeta con .traineddata',
        custom_lang_code: 'Código de idioma personalizado',
        custom_lang_code_placeholder: 'ej: mibanco (sin extensión)',
        selection_mode_title: 'Modo de Selección',
        selection_mode_desc: 'Haga clic y arrastre en el documento para seleccionar un área para OCR. Los resultados aparecerán abajo.',
        grid_tool_on_title: 'Herramienta de Cuadrícula Activa',
        grid_tool_on_desc: 'Dibuje la primera celda para definir la columna, luego haga clic y arrastre para añadir más filas.',
        divider_tool_on_title: 'Añadir Divisor Activo',
        divider_tool_on_desc: 'Haga clic en un cuadro de selección para añadir divisores. Use las teclas 1-9 para cambiar el tamaño.',
    }
};
let currentLang = 'en';

// Global state object
const state = {
    files: [],
    currentFile: null,
    currentPage: 1,
    totalPages: 1,
    zoom: 1.0,
    tesseractWorker: null,
    selections: [],
    isSelecting: false,
    selectionStart: null,
    selectionEnd: null,
    panMode: false,
    panStart: null,
    scrollStart: null,
    isPanning: false,
    spacePressed: false,
    batchMode: false,
    pageColors: {},
    pendingBatchSelections: [],
    isResizing: false,
    resizingSelectionId: null,
    resizingHandle: null,
    originalSelection: null,
    activeRenderTask: null,
    dividerToolMode: false,
    dividerSize: 1,
    isEditingDivider: false,
    editingDividerInfo: null, 
    gridToolMode: false,
    grids: [],
    gridDeleteMode: false,
    activeGridId: null,
    gridToolState: 'idle', // 'idle', 'defining', 'adding'
    isResizingGrid: false,
    resizingGridHandle: null,
    isResizingGridUnified: false,
    resizingGridCorner: null,
    gridResizeStart: null,
    gridAddStart: null,
    isMovingGrid: false,
    gridMoveStart: null,
    cleanerRules: {
        ocrOnlyEnabled: false,
        ocrOnlyList: [],
        filterList: [],
        removeNumbers: false,
        numberLengthThreshold: 5,
        replacements: [],
    },
    preferences: {
        keepSelections: false,
    },
    activeDeleteLineModeSelectionId: null,
    history: [],
    historyIndex: -1,
};
function debounce(func, delay) {
    let timeoutId;
    return function (...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            func.apply(this, args);
        }, delay);
    };
}
const debouncedPerformOCR = debounce(performOCROnSelection, 500);
function pushHistory() {
    if (state.historyIndex < state.history.length - 1) {
        state.history = state.history.slice(0, state.historyIndex + 1);
    }
    const currentStateSnapshot = {
        selections: JSON.parse(JSON.stringify(state.selections)),
        pendingBatchSelections: JSON.parse(JSON.stringify(state.pendingBatchSelections)),
        grids: JSON.parse(JSON.stringify(state.grids)),
    };
    state.history.push(currentStateSnapshot);
    state.historyIndex++;
    updateUndoRedoButtons();
}
const debouncedPushHistory = debounce(pushHistory, 750);
function updateUndoRedoButtons() {
    const undoBtn = document.getElementById('undoBtn');
    const redoBtn = document.getElementById('redoBtn');
    undoBtn.disabled = state.historyIndex <= 0;
    redoBtn.disabled = state.historyIndex >= state.history.length - 1;
}
window.undo = function () {
    if (state.historyIndex > 0) {
        state.historyIndex--;
        const previousState = state.history[state.historyIndex];
        state.selections = JSON.parse(JSON.stringify(previousState.selections));
        state.pendingBatchSelections = JSON.parse(JSON.stringify(previousState.pendingBatchSelections));
        state.grids = JSON.parse(JSON.stringify(previousState.grids));
        renderDocument();
        renderResults();
        updateUndoRedoButtons();
    }
};
window.redo = function () {
    if (state.historyIndex < state.history.length - 1) {
        state.historyIndex++;
        const nextState = state.history[state.historyIndex];
        state.selections = JSON.parse(JSON.stringify(nextState.selections));
        state.pendingBatchSelections = JSON.parse(JSON.stringify(previousState.pendingBatchSelections));
        state.grids = JSON.parse(JSON.stringify(previousState.grids));
        renderDocument();
        renderResults();
        updateUndoRedoButtons();
    }
};
window.getPageColor = function (pageNumber) {
    if (state.pageColors[pageNumber]) {
        return state.pageColors[pageNumber];
    }
    const hue = (pageNumber * 47) % 360;
    const saturation = 70;
    const lightness = 50;
    const color = `hsl(${hue}, ${saturation}%, ${lightness}%)`;
    state.pageColors[pageNumber] = color;
    return color;
};

function updateToolInfoPanel() {
    const batchInfo = document.getElementById('batchInfo');
    const toolStatusInfo = document.getElementById('toolStatusInfo');
    const t = translations[currentLang] || translations.en;

    batchInfo.style.display = 'none';
    toolStatusInfo.style.display = 'none';

    if (state.batchMode) {
        batchInfo.style.display = 'block';
    } else if (state.gridToolMode) {
        const deleteBtnClass = `icon-btn ${state.gridDeleteMode ? 'active' : ''}`;
        toolStatusInfo.innerHTML = `
            <div>
                <div class="batch-info-title">${t.grid_tool_on_title}</div>
                <div>${t.grid_tool_on_desc}</div>
            </div>
            <div style="display: flex; gap: 0.5rem; flex-shrink: 0; margin-top: 0.5rem; align-items: center;">
                <button class="btn btn-secondary btn-small" onclick="showSaveGridPresetModal()">Save Preset</button>
                <button class="btn btn-secondary btn-small" onclick="importGridPreset()">Import Preset</button>
                <button id="gridDeleteBtn" class="${deleteBtnClass}" onclick="toggleGridDeleteMode()" title="Delete a grid">
                    <svg style="width:16px;height:16px;" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                </button>
            </div>
        `;
        toolStatusInfo.style.display = 'block';
    } else if (state.dividerToolMode) {
        toolStatusInfo.innerHTML = `
            <div class="batch-info-title">${t.divider_tool_on_title}</div>
            <div>${t.divider_tool_on_desc}</div>
        `;
        toolStatusInfo.style.display = 'block';
    } else {
         toolStatusInfo.innerHTML = `
            <div class="batch-info-title">${t.selection_mode_title}</div>
            <div>${t.selection_mode_desc}</div>
        `;
        toolStatusInfo.style.display = 'block';
    }
}
window.updateBatchInfo = function () {
    const batchOcrBtn = document.getElementById('batchOcrBtn');
    if (!batchOcrBtn) return;

    if (state.batchMode) {
        const totalSelections = document.getElementById('totalSelections');
        const totalPages = document.getElementById('totalPages');
        const currentPageSelections = document.getElementById('currentPageSelections');
        
        if (!totalSelections || !totalPages || !currentPageSelections) return;
        
        const relevantSelections = state.pendingBatchSelections;
        const uniquePages = [...new Set(relevantSelections.map(s => s.page))];
        const currentPageSelCount = relevantSelections.filter(s => s.page === state.currentPage).length;

        totalSelections.textContent = relevantSelections.length.toString();
        totalPages.textContent = uniquePages.length.toString();
        currentPageSelections.textContent = currentPageSelCount.toString();
        
        batchOcrBtn.style.display = 'block';
        if (state.pendingBatchSelections.length > 0) {
            batchOcrBtn.querySelector('span').textContent = `${translations[currentLang].batch_ocr_button} (${state.pendingBatchSelections.length})`;
        } else {
            batchOcrBtn.querySelector('span').textContent = translations[currentLang].batch_ocr_button;
        }
    } else {
        batchOcrBtn.style.display = 'none';
    }
};
window.handleThemeChange = function (themeName) {
    localStorage.setItem('ocrTheme', themeName);
    applyTheme(themeName);
};
function applyTheme(themeName) {
    document.body.classList.remove('dark-mode', 'winter-theme', 'burgundy-theme');
    if (themeName !== 'light') {
        document.body.classList.add(themeName);
    }
    const themeSelector = document.getElementById('themeSelector');
    if (themeSelector) {
        themeSelector.value = themeName;
    }
}
function initializeTheme() {
    const savedTheme = localStorage.getItem('ocrTheme') || 'light';
    applyTheme(savedTheme);
}
window.handleLanguageChange = function(lang) {
    localStorage.setItem('ocrLanguage', lang);
    applyLanguage(lang);
}

function applyLanguage(lang) {
    currentLang = lang;
    const t = translations[lang] || translations.en;
    
    const setText = (selector, key, options = {}) => {
        const el = document.querySelector(selector);
        if (el && t[key]) {
            const target = options.targetSpan ? el.querySelector('span') : el;
            if (target) {
                target.textContent = t[key];
            }
        }
    };
    const setHtml = (selector, key) => {
        const el = document.querySelector(selector);
        if (el && t[key]) {
            el.innerHTML = t[key];
        }
    };
    const setPlaceholder = (selector, key) => {
        const el = document.querySelector(selector);
        if (el && t[key]) {
            el.placeholder = t[key];
        }
    };
    
    // Left Panel
    setText('#leftPanel .panel-header h2', 'documents');
    setText('#filesBtn', 'files', { targetSpan: true });
    setText('#uploadText', 'select_file_upload');
    setText('#uploadSubtext', 'file_types_supported');
    setText('button[onclick="clearAllFiles()"]', 'clear_all_files');

    // Center Panel Controls
    setText('#prevBtn', 'previous', { targetSpan: true });
    setText('#nextBtn', 'next', { targetSpan: true });
    setText('button[onclick="resetZoom()"]', 'reset');
    setText('#panToolBtn', 'pan_tool', { targetSpan: true });
    setText('#dividerToolBtn', 'add_divider', { targetSpan: true });
    setText('#gridToolBtn', 'grid_tool', { targetSpan: true });
    setText('button[onclick="clearSelections()"]', 'clear_selections');
    
    // Center Panel Empty State
    setText('#emptyState .empty-text', 'no_document_loaded');
    setText('#emptyState .empty-subtext', 'empty_subtext');

    // Right Panel
    setText('#rightPanel .panel-header h2', 'ocr_results');
    setText('#batchInfo .batch-info-title', 'batch_info_title');
    setText('#batchInfo > div:nth-of-type(2)', 'batch_info_subtitle');
    setText('#totalSelections + .batch-stat-label', 'total_selections');
    setText('#totalPages + .batch-stat-label', 'pages_used');
    setText('#currentPageSelections + .batch-stat-label', 'current_page');
    setText('#batchOcrBtn', 'batch_ocr_button', { targetSpan: true });
    setText('#gridOcrBtn', 'process_grid', { targetSpan: true });
    setText('button[onclick="exportAllResults()"]', 'export_all', { targetSpan: true });
    const resultsContainer = document.getElementById('resultsContainer');
    if (resultsContainer && resultsContainer.firstElementChild?.classList.contains('alert')) {
        resultsContainer.firstElementChild.textContent = t.results_placeholder;
    }

    // Settings Modal
    setText('.settings-nav-btn[data-target="view-preferences"]', 'preferences');
    setText('.settings-nav-btn[data-target="view-cleaner"]', 'result_cleaner');
    setText('.settings-nav-btn[data-target="view-engine"]', 'ocr_engine');
    setText('.settings-back-btn', 'back', { targetSpan: true });
    
    // Preferences View
    setText('#view-preferences .form-group:nth-of-type(1) label', 'theme');
    setText('#view-preferences .form-group:nth-of-type(2) label', 'language');
    setText('#view-preferences .form-group:nth-of-type(4) label.form-label', 'selection_behavior');
    setText('#view-preferences label[for="keepSelections"]', 'keep_selections_label');
    setText('#view-preferences .form-group:nth-of-type(4) p', 'keep_selections_desc');

    // Result Cleaner View
    setText('#view-cleaner .form-group:nth-of-type(1) label.form-label', 'ocr_only_whitelist');
    setText('#view-cleaner label[for="ocrOnlyEnabled"]', 'enable_ocr_only');
    setText('#view-cleaner .form-group:nth-of-type(1) p', 'ocr_only_desc');
    setPlaceholder('#ocrOnlyTagInput', 'add_phrase_placeholder');
    setText('#view-cleaner .form-group:nth-of-type(2) label.form-label', 'word_phrase_replacements');
    setPlaceholder('#replacementFind', 'find_text_placeholder');
    setPlaceholder('#replacementReplace', 'replace_with_placeholder');
    setText('#addReplacementRuleBtn', 'add_button');
    setText('#view-cleaner .form-group:nth-of-type(3) label.form-label', 'filter_list');
    setPlaceholder('#cleanerTagInput', 'add_item_placeholder');
    setText('#view-cleaner .form-group:nth-of-type(4) label.form-label', 'number_filtering');
    setText('#view-cleaner label[for="cleanerRemoveNumbers"]', 'remove_numbers_longer_than');
    setText('#view-cleaner label[for="cleanerNumberThreshold"]', 'digits');
    setText('button[onclick="resetCleanerSettings()"]', 'reset_cleaner');

    // OCR Engine View
    setHtml('#view-engine p', 'engine_desc');
    setText('#view-engine .form-group:nth-of-type(1) label.form-label', 'custom_lang_url');
    setPlaceholder('#modalCustomLangUrl', 'custom_lang_url_placeholder');
    setText('#view-engine .form-group:nth-of-type(2) label.form-label', 'custom_lang_code');
    setPlaceholder('#modalCustomLangCode', 'custom_lang_code_placeholder');

    // Modal Actions
    const modalActions = document.querySelector('.modal-actions');
    if (modalActions) {
        const cancelButton = modalActions.querySelector('.btn:not(.btn-primary)');
        const saveButton = modalActions.querySelector('.btn-primary');
        if (cancelButton) cancelButton.textContent = t.cancel;
        if (saveButton) saveButton.textContent = t.save_settings;
    }

    // Update dynamic text
    updatePageInfo();
    updateBatchToggleButton();
    updateToolInfoPanel();
    window.updateBatchInfo();
    renderResults();
}

window.previousPage = function () {
    if (state.currentPage > 1) {
        state.currentPage--;
        renderDocument();
        renderResults();
        window.updateBatchInfo();
    }
};
window.nextPage = function () {
    if (state.currentFile && state.currentPage < state.currentFile.totalPages) {
        state.currentPage++;
        renderDocument();
        renderResults();
        window.updateBatchInfo();
    }
};
window.zoomOut = function () {
    state.zoom = Math.max(state.zoom - 0.2, 0.5);
    const container = document.getElementById('canvasContainer');
    const scrollLeft = container.scrollLeft;
    const scrollTop = container.scrollTop;
    renderDocument().then(() => {
        container.scrollLeft = scrollLeft;
        container.scrollTop = scrollTop;
    });
};
window.zoomIn = function () {
    state.zoom = Math.min(state.zoom + 0.2, 5.0);
    const container = document.getElementById('canvasContainer');
    const scrollLeft = container.scrollLeft;
    const scrollTop = container.scrollTop;
    renderDocument().then(() => {
        container.scrollLeft = scrollLeft;
        container.scrollTop = scrollTop;
    });
};
window.resetZoom = function () {
    state.zoom = 1.0;
    const container = document.getElementById('canvasContainer');
    container.scrollLeft = 0;
    container.scrollTop = 0;
    renderDocument();
};
window.togglePanMode = function () {
    state.panMode = !state.panMode;
    updatePanModeUI();
    if (state.panMode) {
        state.dividerToolMode = false;
        state.gridToolMode = false;
        updateDividerModeUI();
        updateGridModeUI();
        showAlert('Pan mode enabled - drag to move around', 'info');
    } else {
        showAlert('Pan mode disabled', 'info');
    }
    updateToolInfoPanel();
};
window.toggleDividerMode = function() {
    state.dividerToolMode = !state.dividerToolMode;
    updateDividerModeUI();
    if (state.dividerToolMode) {
        state.panMode = false;
        state.gridToolMode = false;
        updatePanModeUI();
        updateGridModeUI();
        showAlert(`Divider mode enabled. Press 1-9 to set size. Current size: ${state.dividerSize}`, 'info');
    } else {
        showAlert('Divider mode disabled.', 'info');
    }
    updateToolInfoPanel();
};

window.toggleGridDeleteMode = function() {
    state.gridDeleteMode = !state.gridDeleteMode;
    const deleteBtn = document.getElementById('gridDeleteBtn');
    if (state.gridDeleteMode) {
        showAlert('Grid delete mode is ON. Click a grid to delete it.', 'warning');
        deleteBtn.classList.add('active');
    } else {
        showAlert('Grid delete mode is OFF.', 'info');
        deleteBtn.classList.remove('active');
    }
};

window.toggleGridMode = function() {
    state.gridToolMode = !state.gridToolMode;
    // When turning off grid mode, also turn off delete mode
    if (!state.gridToolMode) {
        state.gridDeleteMode = false;
    }
    updateGridModeUI();
    if (state.gridToolMode) {
        state.panMode = false;
        state.dividerToolMode = false;
        updatePanModeUI();
        updateDividerModeUI();
        showAlert('Grid mode enabled. Draw your first cell to set the height.', 'info');
    } else {
        showAlert('Grid mode disabled.', 'info');
    }
    updateToolInfoPanel();
};
window.clearSelections = function () {
    let cleared = false;
    if (state.batchMode) {
        if (state.pendingBatchSelections.length > 0) {
            state.pendingBatchSelections = [];
            cleared = true;
        }
    } else {
        if (state.selections.length > 0) {
            state.selections = [];
            cleared = true;
        }
    }
    if (state.grids.length > 0) {
        state.grids = [];
        cleared = true;
    }
    
    if (cleared) {
        showAlert('Cleared all selections and grids', 'info');
        pushHistory();
    }
    
    state.selectionStart = null;
    state.selectionEnd = null;
    clearSelectionOverlay();
    renderDocument();
    renderResults();
    updateToolInfoPanel();
    window.updateBatchInfo();
};
window.toggleBatchMode = function () {
    state.batchMode = !state.batchMode;
    updateBatchToggleButton();
    if (state.batchMode) {
        showAlert('Multi-Page Batch Processing enabled! Selections will be preserved across pages, but OCR will run only when you click the batch OCR button.', 'success');
        state.selections = [];
        renderResults();
    } else {
        showAlert('Batch mode disabled. Returning to normal OCR mode.', 'info');
        state.pendingBatchSelections = [];
    }
    updateToolInfoPanel();
    window.updateBatchInfo();
};
window.togglePanel = function (panelId) {
    const panel = document.getElementById(panelId);
    panel.classList.toggle('hidden');
};
window.processBatchSelections = async function () {
    if (!state.tesseractWorker) {
        showAlert('OCR engine not ready', 'error');
        return;
    }
    if (state.pendingBatchSelections.length === 0) {
        showAlert('No pending selections to process', 'error');
        return;
    }
    try {
        showLoading(`Processing ${state.pendingBatchSelections.length} batch selections...`);
        
        document.getElementById('resultsContainer').innerHTML = '';
        
        const newSelections = [];

        for (let i = 0; i < state.pendingBatchSelections.length; i++) {
            const selection = state.pendingBatchSelections[i];
            selection.number = i + 1;
            addResult(selection);
            
            // For batch processing, we don't need to re-render the main canvas for each selection
            // if they are on the same page. We just need to ensure the correct file is active.
            // The OCR function now handles high-res rendering internally.
            await performOCROnSelection(selection, selection.number);

            newSelections.push(selection);
        }

        state.selections = newSelections;
        state.pendingBatchSelections = [];
        
        hideLoading();
        showAlert(`Batch processing completed! ${state.selections.length} selections processed.`, 'success');
        
        pushHistory();
        window.updateBatchInfo();
        renderDocument(); // Re-render the final page
    }
    catch (error) {
        hideLoading();
        showAlert(`Batch processing failed: ${error.message}`, 'error');
        console.error('Batch OCR processing error:', error);
    }
};
window.exportAllResults = function () {
    if (state.selections.length === 0) {
        showAlert('No results to export', 'error');
        return;
    }
    const allData = {
        exportDate: new Date().toISOString(),
        document: state.currentFile?.name,
        totalSelections: state.selections.length,
        selections: state.selections.filter(s => s.text).map(s => ({
            number: s.number,
            page: s.page,
            text: s.text,
            coordinates: { x: s.x, y: s.y, width: s.width, height: s.height }
        }))
    };
    downloadFile(JSON.stringify(allData, null, 2), 'all-selections.json', 'application/json');
};
window.clearAllFiles = function () {
    const pdfsToDestroy = state.files
        .map(f => f.pdfDocument)
        .filter(pdf => !!pdf);
    state.files.length = 0;
    state.currentFile = null;
    state.selections.length = 0;
    state.pendingBatchSelections.length = 0;
    state.grids = [];
    state.currentPage = 1;
    state.zoom = 1.0;
    state.history = [];
    state.historyIndex = -1;
    pushHistory();
    if (state.activeRenderTask) {
        state.activeRenderTask.cancel();
        state.activeRenderTask = null;
    }
    renderDocumentsList();
    renderResults();
    window.updateBatchInfo();
    renderDocument();
    showAlert('All files cleared', 'success');
    if (pdfsToDestroy.length > 0) {
        setTimeout(() => {
            console.log(`Cleaning up memory for ${pdfsToDestroy.length} PDF document(s).`);
            pdfsToDestroy.forEach(pdf => {
                pdf.destroy().catch(err => console.error("Error destroying PDF in background:", err));
            });
        }, 100);
    }
};
window.selectFile = async function (fileId) {
    const fileObj = state.files.find(f => f.id === fileId);
    if (!fileObj || (state.currentFile && state.currentFile.id === fileId))
        return;
    if (state.currentFile && state.currentFile.pdfDocument) {
        await state.currentFile.pdfDocument.destroy();
        state.currentFile.pdfDocument = null;
    }
    state.currentFile = fileObj;
    state.currentPage = 1;
    state.selections = [];
    state.pendingBatchSelections = [];
    state.grids = [];
    state.history = [];
    state.historyIndex = -1;
    pushHistory();
    if (fileObj.type === 'application/pdf' && !fileObj.pdfDocument) {
        showLoading('Loading document...');
        try {
            const arrayBuffer = await fileObj.file.arrayBuffer();
            const pdf = await pdfjsLib.getDocument(arrayBuffer).promise;
            fileObj.pdfDocument = pdf;
            fileObj.totalPages = pdf.numPages;
        }
        catch (e) {
            showAlert('Failed to load PDF document.', 'error');
            console.error(e);
            state.currentFile = null;
        }
        finally {
            hideLoading();
        }
    }
    else if (fileObj.type.startsWith('image/')) {
        fileObj.totalPages = 1;
    }
    renderDocumentsList();
    renderResults();
    await renderDocument();
};
window.cleanBlankSpaces = function (selectionId) {
    const selection = state.selections.find(s => s.id === selectionId);
    const textarea = document.getElementById(`result-${selectionId}`);
    if (textarea && selection) {
        const currentText = textarea.value;
        const cleanedText = currentText
            .split('\n')
            .filter(line => line.trim() !== '')
            .join('\n')
            .replace(/\s+$/gm, '');
        if (currentText !== cleanedText) {
            textarea.value = cleanedText;
            selection.text = cleanedText;
            const removedCount = currentText.split('\n').length - cleanedText.split('\n').length;
            if (removedCount > 0) {
                showAlert(`Removed ${removedCount} empty line${removedCount > 1 ? 's' : ''}`, 'success');
            }
            else {
                showAlert('Cleaned whitespace', 'success');
            }
            pushHistory();
        }
        else {
            showAlert('No empty lines found to remove', 'info');
        }
    }
};
function handleLineDelete(event) {
    const textarea = event.target;
    const selectionId = state.activeDeleteLineModeSelectionId;
    if (!textarea || !selectionId)
        return;
    const selectionInState = state.selections.find(s => s.id === selectionId);
    if (!selectionInState)
        return;
    const text = textarea.value;
    const cursorPos = textarea.selectionStart;
    const textBeforeCursor = text.substring(0, cursorPos);
    const lineIndex = textBeforeCursor.split('\n').length - 1;
    const lines = text.split('\n');
    const removedLine = lines.splice(lineIndex, 1);
    const newText = lines.join('\n');
    textarea.value = newText;
    selectionInState.text = newText;
    if (removedLine.length > 0 && removedLine[0].trim() !== '') {
        showAlert('Line removed', 'success');
        pushHistory();
    }
}
window.toggleDeleteLineMode = function (selectionId) {
    const oldSelectionId = state.activeDeleteLineModeSelectionId;
    const newIsSameAsOld = oldSelectionId === selectionId;
    if (oldSelectionId) {
        const oldTextarea = document.getElementById(`result-${oldSelectionId}`);
        const oldButton = document.querySelector(`[onclick="window.toggleDeleteLineMode('${oldSelectionId}')"]`);
        if (oldTextarea) {
            oldTextarea.classList.remove('delete-line-mode');
            oldTextarea.removeEventListener('click', handleLineDelete);
        }
        if (oldButton) {
            oldButton.classList.remove('btn-active');
        }
    }
    if (!newIsSameAsOld) {
        state.activeDeleteLineModeSelectionId = selectionId;
        const newTextarea = document.getElementById(`result-${selectionId}`);
        const newButton = document.querySelector(`[onclick="window.toggleDeleteLineMode('${selectionId}')"]`);
        if (newTextarea) {
            newTextarea.classList.add('delete-line-mode');
            newTextarea.addEventListener('click', handleLineDelete);
            showAlert('Delete Line mode active. Click a line to remove it.', 'info');
        }
        if (newButton) {
            newButton.classList.add('btn-active');
        }
    }
    else {
        state.activeDeleteLineModeSelectionId = null;
        showAlert('Delete Line mode disabled.', 'info');
    }
};
window.swapCommasAndDots = function (selectionId) {
    const selection = state.selections.find(s => s.id === selectionId);
    const textarea = document.getElementById(`result-${selectionId}`);
    if (textarea && selection) {
        const originalText = textarea.value;
        if (originalText.trim() === '') {
            showAlert('No text to swap.', 'info');
            return;
        }
        const placeholder = '___PLACEHOLDER___';
        let newText = originalText.replace(/,/g, placeholder).replace(/\./g, ',').replace(new RegExp(placeholder, 'g'), '.');
        if (originalText !== newText) {
            textarea.value = newText;
            selection.text = newText;
            showAlert('Commas and dots swapped.', 'success');
            pushHistory();
        } else {
            showAlert('No commas or dots found to swap.', 'info');
        }
    }
};
function saveCleanerRules() {
    localStorage.setItem('ocrCleanerRules', JSON.stringify(state.cleanerRules));
}
function savePreferences() {
    localStorage.setItem('ocrPreferences', JSON.stringify(state.preferences));
}
window.addToWhitelist = function (selectionId) {
    const selection = state.selections.find(s => s.id === selectionId);
    if (!selection || !selection.text) {
        showAlert('No text in this selection to add to the whitelist.', 'warning');
        return;
    }
    const lines = selection.text.split('\n');
    let addedCount = 0;
    lines.forEach(line => {
        const trimmedLine = line.trim();
        if (trimmedLine && !state.cleanerRules.ocrOnlyList.includes(trimmedLine)) {
            state.cleanerRules.ocrOnlyList.push(trimmedLine);
            addedCount++;
        }
    });

    if (addedCount > 0) {
        saveCleanerRules();
        showAlert(`Added ${addedCount} new item(s) to the OCR Only whitelist.`, 'success');
        if (document.getElementById('ocrSettingsModal').classList.contains('visible')) {
            renderOcrOnlyTags();
        }
    } else {
        showAlert('All lines from this result are already in the whitelist.', 'info');
    }
};
window.addToFilter = function (selectionId) {
    const selection = state.selections.find(s => s.id === selectionId);
    if (!selection || !selection.text) {
        showAlert('No text in this selection to add to the filter.', 'warning');
        return;
    }
    const lines = selection.text.split('\n');
    let addedCount = 0;
    lines.forEach(line => {
        const trimmedLine = line.trim();
        if (trimmedLine && !state.cleanerRules.filterList.includes(trimmedLine)) {
            state.cleanerRules.filterList.push(trimmedLine);
            addedCount++;
        }
    });
    if (addedCount > 0) {
        saveCleanerRules();
        showAlert(`Added ${addedCount} new item(s) to the cleaner filter list.`, 'success');
        // If the settings modal is open, refresh its view
        if (document.getElementById('ocrSettingsModal').classList.contains('visible')) {
            renderCleanerTags();
        }
    }
    else {
        showAlert('All lines from this result are already in the filter list.', 'info');
    }
};
window.deleteResult = function (selectionId) {
    state.selections = state.selections.filter(s => s.id !== selectionId);
    renderDocument();
    renderResults();
    pushHistory();
};
window.copyResult = function (selectionId) {
    const textarea = document.getElementById(`result-${selectionId}`);
    if (textarea) {
        textarea.select();
        document.execCommand('copy');
        showAlert('Copied to clipboard', 'success');
    }
};
window.exportResult = function (selectionId, format) {
    const selection = state.selections.find(s => s.id === selectionId);
    if (!selection || !selection.text)
        return;
    let content, mimeType, extension;
    switch (format) {
        case 'txt':
            content = selection.text;
            mimeType = 'text/plain';
            extension = 'txt';
            break;
        case 'csv':
            content = `"Selection","Page","Text","X","Y","Width","Height"\n`;
            content += `"${selection.number}","${selection.page}","${selection.text.replace(/"/g, '""')}","${selection.x}","${selection.y}","${selection.width}","${selection.height}"`;
            mimeType = 'text/csv';
            extension = 'csv';
            break;
        case 'json':
            content = JSON.stringify({
                selection: selection.number,
                page: selection.page,
                text: selection.text,
                coordinates: { x: selection.x, y: selection.y, width: selection.width, height: selection.height }
            }, null, 2);
            mimeType = 'application/json';
            extension = 'json';
            break;
    }
    downloadFile(content, `selection-${selection.number}.${extension}`, mimeType);
};
function renderReplacementRules() {
    const container = document.getElementById('replacementRulesContainer');
    if (!container)
        return;
    container.innerHTML = '';
    const rules = state.cleanerRules.replacements || [];
    rules.forEach((rule, index) => {
        const ruleEl = document.createElement('div');
        ruleEl.className = 'replacement-rule';
        const textEl = document.createElement('div');
        textEl.className = 'replacement-rule-text';
        textEl.innerHTML = `"${rule.find}" &rarr; "${rule.replace}"`;
        const removeEl = document.createElement('span');
        removeEl.className = 'replacement-rule-remove';
        removeEl.innerHTML = '&times;';
        removeEl.title = 'Remove rule';
        removeEl.onclick = () => {
            state.cleanerRules.replacements.splice(index, 1);
            saveCleanerRules();
            renderReplacementRules();
        };
        ruleEl.appendChild(textEl);
        ruleEl.appendChild(removeEl);
        container.appendChild(ruleEl);
    });
}
window.showSettingsView = function(viewId, clickedButton) {
    const container = document.getElementById('settingsViewsContainer');
    container.querySelectorAll('.settings-view').forEach(view => view.classList.remove('active'));
    
    document.getElementById(viewId).classList.add('active');

    const nav = document.getElementById('settingsNav');
    const backBtn = document.querySelector('.settings-back-btn');
    const title = document.getElementById('settingsModalTitle');
    const t = translations[currentLang] || translations.en;

    if (window.innerWidth < 640) { // Example breakpoint for mobile
        nav.style.display = 'none';
        backBtn.style.display = 'flex';
        container.style.display = 'block';
    }

    document.querySelectorAll('.settings-nav-btn').forEach(btn => btn.classList.remove('active'));
    if (clickedButton && clickedButton.classList.contains('settings-nav-btn')) {
        clickedButton.classList.add('active');
        const key = clickedButton.textContent.toLowerCase().replace(' ', '_');
        title.textContent = t[key] || clickedButton.textContent;
    }

    if (viewId === 'main') {
        nav.style.display = 'block';
        backBtn.style.display = 'none';
        container.style.display = 'none';
        title.textContent = "Settings";
    }
};
window.showOcrSettingsModal = function () {
    const { removeNumbers, numberLengthThreshold, ocrOnlyEnabled } = state.cleanerRules;

    const ocrOnlyCheckbox = document.getElementById('ocrOnlyEnabled');
    const ocrOnlyInput = document.getElementById('ocrOnlyTagInput');
    const ocrOnlyContainer = document.getElementById('ocrOnlyTagsContainer');
    ocrOnlyCheckbox.checked = ocrOnlyEnabled;
    ocrOnlyInput.disabled = !ocrOnlyEnabled;
    ocrOnlyContainer.style.opacity = ocrOnlyEnabled ? '1' : '0.5';
    ocrOnlyContainer.style.pointerEvents = ocrOnlyEnabled ? 'auto' : 'none';

    document.getElementById('cleanerRemoveNumbers').checked = removeNumbers;
    const numberThresholdInput = document.getElementById('cleanerNumberThreshold');
    numberThresholdInput.value = numberLengthThreshold.toString();
    numberThresholdInput.disabled = !removeNumbers;
    
    // Load preferences
    document.getElementById('keepSelections').checked = state.preferences.keepSelections;

    renderCleanerTags();
    renderOcrOnlyTags();
    renderReplacementRules();
    showSettingsView('view-preferences', document.querySelector('.settings-nav-btn[data-target="view-preferences"]'));
    document.getElementById('ocrSettingsModal').classList.add('visible');
};
window.closeOcrSettingsModal = function () {
    document.getElementById('ocrSettingsModal').classList.remove('visible');
};
window.saveAndReloadSettings = async function () {
    // 1. Save Preferences
    state.preferences.keepSelections = document.getElementById('keepSelections').checked;
    savePreferences();

    // 2. Save Cleaner Settings
    const ocrOnlyEnabled = document.getElementById('ocrOnlyEnabled').checked;
    state.cleanerRules.ocrOnlyEnabled = ocrOnlyEnabled;
    const removeNumbers = document.getElementById('cleanerRemoveNumbers').checked;
    const numberLengthThreshold = parseInt(document.getElementById('cleanerNumberThreshold').value, 10) || 5;
    state.cleanerRules.removeNumbers = removeNumbers;
    state.cleanerRules.numberLengthThreshold = numberLengthThreshold;
    saveCleanerRules();
    
    // 3. Save and Reload OCR Engine (existing logic)
    const customLangUrl = document.getElementById('modalCustomLangUrl').value.trim();
    const customLangCode = document.getElementById('modalCustomLangCode').value.trim();
    localStorage.setItem('ocrCustomUrl', customLangUrl);
    localStorage.setItem('ocrCustomCode', customLangCode);
    await initializeTesseract();
    window.closeOcrSettingsModal();
    showAlert('Settings saved.', 'success');
};
window.resetCleanerSettings = function () {
    // Reset state object
    state.cleanerRules = {
        ocrOnlyEnabled: false,
        ocrOnlyList: [],
        filterList: [],
        removeNumbers: false,
        numberLengthThreshold: 5,
        replacements: [],
    };
    // Remove from localStorage
    localStorage.removeItem('ocrCleanerRules');
    // Update the UI in the modal
    const ocrOnlyCheckbox = document.getElementById('ocrOnlyEnabled');
    ocrOnlyCheckbox.checked = false;
    const ocrOnlyInput = document.getElementById('ocrOnlyTagInput');
    ocrOnlyInput.disabled = true;
    const ocrOnlyContainer = document.getElementById('ocrOnlyTagsContainer');
    ocrOnlyContainer.style.opacity = '0.5';
    ocrOnlyContainer.style.pointerEvents = 'none';
    document.getElementById('ocrOnlyTagInput').value = '';
    
    document.getElementById('cleanerTagInput').value = '';
    document.getElementById('replacementFind').value = '';
    document.getElementById('replacementReplace').value = '';
    const removeNumbersCheckbox = document.getElementById('cleanerRemoveNumbers');
    removeNumbersCheckbox.checked = false;
    const numberThresholdInput = document.getElementById('cleanerNumberThreshold');
    numberThresholdInput.value = '5';
    numberThresholdInput.disabled = true;
    renderOcrOnlyTags();
    renderCleanerTags();
    renderReplacementRules();
    showAlert('Cleaner settings have been reset to default.', 'info');
};
window.rotatePage = async function (angle) {
    if (!state.currentFile)
        return;
    const file = state.currentFile;
    const pageNum = state.currentPage;
    if (!file.pageRotations)
        file.pageRotations = {};
    const currentRotation = file.pageRotations[pageNum] || 0;
    const newRotation = (currentRotation + angle + 360) % 360;
    file.pageRotations[pageNum] = newRotation;
    let pageWidth, pageHeight;
    if (file.type.startsWith('image/')) {
        pageWidth = file.image.width;
        pageHeight = file.image.height;
    }
    else {
        if (!file.originalPageDimensions)
            file.originalPageDimensions = {};
        if (!file.originalPageDimensions[pageNum]) {
            const page = await file.pdfDocument.getPage(pageNum);
            const viewport = page.getViewport({ scale: 1.0 });
            file.originalPageDimensions[pageNum] = { width: viewport.width, height: viewport.height };
        }
        const dims = file.originalPageDimensions[pageNum];
        pageWidth = dims.width;
        pageHeight = dims.height;
    }
    const transformCoords = (sel) => {
        let { x, y, width, height } = sel;
        let newX, newY, newWidth, newHeight;
        // Dimensions at current rotation
        let currentWidth = (currentRotation === 90 || currentRotation === 270) ? pageHeight : pageWidth;
        let currentHeight = (currentRotation === 90 || currentRotation === 270) ? pageWidth : pageHeight;
        if (angle === 90) { // Clockwise
            newX = y;
            newY = currentWidth - x - width;
            newWidth = height;
            newHeight = width;
        }
        else { // Counter-clockwise
            newX = currentHeight - y - height;
            newY = x;
            newWidth = height;
            newHeight = width;
        }
        return { ...sel, x: newX, y: newY, width: newWidth, height: newHeight, dividers: [] };
    };
    let hadDividers = false;
    const checkAndClearDividers = (sel) => {
        if(sel.page === pageNum && sel.dividers && sel.dividers.length > 0) {
            hadDividers = true;
            return transformCoords(sel);
        }
        return transformCoords(sel);
    }
    state.selections = state.selections.map(s => s.page === pageNum ? checkAndClearDividers(s) : s);
    state.pendingBatchSelections = state.pendingBatchSelections.map(s => s.page === pageNum ? checkAndClearDividers(s) : s);
    
    if (hadDividers) {
        showAlert('Dividers cleared for selections on rotated page.', 'warning');
    }

    pushHistory();
    await renderDocument();
};
function renderDocumentsList() {
    const documentsList = document.getElementById('documentsList');
    if (!documentsList)
        return;
    if (state.files.length === 0) {
        documentsList.innerHTML = '';
        return;
    }
    let html = '';
    state.files.forEach(fileObj => {
        const isSelected = state.currentFile?.id === fileObj.id;
        html += `
            <div class="document-item ${isSelected ? 'selected' : ''}" 
                 onclick="window.selectFile('${fileObj.id}')">
                <div class="document-name">${fileObj.name}</div>
                <div class="document-meta">
                    ${fileObj.totalPages || '?'} page(s)
                </div>
            </div>
        `;
    });
    documentsList.innerHTML = html;
}
function initializeUploadZone() {
    const uploadZone = document.getElementById('uploadZone');
    const fileInput = document.getElementById('fileInput');
    uploadZone.addEventListener('click', () => fileInput.click());
    uploadZone.addEventListener('dragover', (e) => {
        e.preventDefault();
        uploadZone.classList.add('dragover');
    });
    uploadZone.addEventListener('dragleave', () => {
        uploadZone.classList.remove('dragover');
    });
    uploadZone.addEventListener('drop', (e) => {
        e.preventDefault();
        uploadZone.classList.remove('dragover');
        handleDroppedItems(e.dataTransfer);
    });
    fileInput.addEventListener('change', (e) => {
        handleFiles(e.target.files);
    });
}
function initializeCanvas() {
    const overlayCanvas = document.getElementById('overlayCanvas');
    overlayCanvas.addEventListener('mousedown', startInteraction);
    overlayCanvas.addEventListener('mousemove', updateInteraction);
    overlayCanvas.addEventListener('mouseup', endInteraction);
    overlayCanvas.addEventListener('mouseleave', cancelInteraction);
    overlayCanvas.addEventListener('mousemove', updateCursor);
}
async function initializeTesseract() {
    try {
        if (state.tesseractWorker) {
            await state.tesseractWorker.terminate();
            state.tesseractWorker = null;
        }
        const customLangUrl = document.getElementById('modalCustomLangUrl').value.trim();
        const customLangCode = document.getElementById('modalCustomLangCode').value.trim();
        const langCode = customLangCode || 'eng';
        showLoading(`Initializing OCR engine with '${langCode}'...<br><small>This may take a moment.</small>`);
        const workerOptions = {};
        if (customLangUrl) {
            workerOptions.langPath = customLangUrl;
        }
        state.tesseractWorker = await Tesseract.createWorker(workerOptions);
        await state.tesseractWorker.loadLanguage(langCode);
        await state.tesseractWorker.initialize(langCode);
        hideLoading();
        showAlert(`OCR engine ready with '${langCode}' language.`, 'success');
    }
    catch (error) {
        hideLoading();
        showAlert('Failed to initialize OCR: ' + error.message, 'error');
        console.error('OCR initialization error:', error);
    }
}
function initializeKeyboard() {
    document.addEventListener('keydown', (e) => {
        const target = e.target;
        const isTyping = target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || target.isContentEditable;

        if (state.dividerToolMode && !isTyping && e.key >= '1' && e.key <= '9') {
            e.preventDefault();
            const newSize = parseInt(e.key, 10);
            state.dividerSize = newSize;
            showAlert(`Divider size set to ${newSize}`, 'info');
        }

        if (e.code === 'Space' && !e.repeat && !isTyping) {
            e.preventDefault();
            state.spacePressed = true;
            updatePanModeUI();
        }
    });
    document.addEventListener('keyup', (e) => {
        if (e.code === 'Space') {
            if (state.spacePressed) {
                e.preventDefault();
            }
            state.spacePressed = false;
            updatePanModeUI();
        }
    });
}
function updatePanModeUI() {
    const btn = document.getElementById('panToolBtn');
    const wrapper = document.getElementById('canvasWrapper');
    const isActive = state.panMode || state.spacePressed;
    if (isActive) {
        btn.classList.add('btn-active');
        wrapper.classList.add('pan-mode');
    }
    else {
        btn.classList.remove('btn-active');
        wrapper.classList.remove('pan-mode');
    }
}
function updateDividerModeUI() {
    const btn = document.getElementById('dividerToolBtn');
    if (state.dividerToolMode) {
        btn.classList.add('btn-active');
    } else {
        btn.classList.remove('btn-active');
    }
}
function updateGridModeUI() {
    const btn = document.getElementById('gridToolBtn');
    if (state.gridToolMode) {
        btn.classList.add('btn-active');
    } else {
        btn.classList.remove('btn-active');
    }
}
function initializeResizing() {
    let isResizing = false;
    let resizeTarget = null;
    let startX = 0;
    let startWidth = 0;
    const leftResizeHandle = document.getElementById('leftResizeHandle');
    const rightResizeHandle = document.getElementById('rightResizeHandle');
    leftResizeHandle.addEventListener('mousedown', (e) => {
        e.preventDefault();
        e.stopPropagation();
        isResizing = true;
        resizeTarget = 'left';
        startX = e.clientX;
        startWidth = document.getElementById('leftPanel').offsetWidth;
        document.body.style.cursor = 'col-resize';
        document.body.style.userSelect = 'none';
    });
    rightResizeHandle.addEventListener('mousedown', (e) => {
        e.preventDefault();
        e.stopPropagation();
        isResizing = true;
        resizeTarget = 'right';
        startX = e.clientX;
        startWidth = document.getElementById('rightPanel').offsetWidth;
        document.body.style.cursor = 'col-resize';
        document.body.style.userSelect = 'none';
    });
    document.addEventListener('mousemove', (e) => {
        if (!isResizing)
            return;
        const deltaX = e.clientX - startX;
        const minWidth = 200;
        const maxWidth = 600;
        if (resizeTarget === 'left') {
            const newWidth = Math.max(minWidth, Math.min(maxWidth, startWidth + deltaX));
            document.getElementById('leftPanel').style.width = newWidth + 'px';
        }
        else if (resizeTarget === 'right') {
            const newWidth = Math.max(minWidth, Math.min(maxWidth, startWidth - deltaX));
            document.getElementById('rightPanel').style.width = newWidth + 'px';
        }
    });
    document.addEventListener('mouseup', () => {
        if (isResizing) {
            isResizing = false;
            resizeTarget = null;
            document.body.style.cursor = '';
            document.body.style.userSelect = '';
        }
    });
}
function handleFiles(files) {
    handleIndividualFiles(Array.from(files));
}
async function handleDroppedItems(dataTransfer) {
    try {
        const items = Array.from(dataTransfer.items || []);
        const hasDirectories = items.some(item => {
            if (typeof item.webkitGetAsEntry === 'function') {
                const entry = item.webkitGetAsEntry();
                return entry && entry.isDirectory;
            }
            return false;
        });
        if (hasDirectories) {
            await handleDirectoryDrop(dataTransfer.items);
        }
        else {
            handleFiles(dataTransfer.files);
        }
    }
    catch (error) {
        console.error('Error handling dropped items:', error);
        showAlert('Drag and drop error: ' + error.message, 'error');
        handleFiles(dataTransfer.files);
    }
}
async function handleDirectoryDrop(items) {
    showLoading('Processing dropped folder...');
    const files = [];
    const entries = Array.from(items).map(item => typeof item.webkitGetAsEntry === 'function' ? item.webkitGetAsEntry() : null);
    const traversePromises = entries.map(entry => {
        if (entry) {
            return traverseDirectory(entry, files);
        }
        return Promise.resolve();
    });
    try {
        await Promise.all(traversePromises);
        hideLoading();
        if (files.length > 0) {
            handleIndividualFiles(files);
        }
        else {
            showAlert('No valid PDF or image files found in the dropped folder(s).', 'warning');
        }
    }
    catch (error) {
        hideLoading();
        showAlert('Error processing folder: ' + error.message, 'error');
        console.error('Error traversing directory:', error);
    }
}
function traverseDirectory(entry, fileList) {
    return new Promise((resolve, reject) => {
        if (entry.isFile) {
            entry.file((file) => {
                fileList.push(file);
                resolve();
            }, reject);
        }
        else if (entry.isDirectory) {
            const reader = entry.createReader();
            const readAllEntries = () => {
                reader.readEntries(async (entries) => {
                    if (entries.length > 0) {
                        await Promise.all(entries.map(e => traverseDirectory(e, fileList)));
                        readAllEntries();
                    }
                    else {
                        resolve();
                    }
                }, reject);
            };
            readAllEntries();
        }
        else {
            resolve();
        }
    });
}
function handleIndividualFiles(files) {
    let processedCount = 0;
    files.forEach((file) => {
        if (file.name.endsWith('.json')) {
            return; 
        }
        if (file.type === 'application/pdf' || file.type.startsWith('image/')) {
            const fileObj = {
                id: 'file_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9),
                file: file,
                name: file.name,
                type: file.type,
                size: file.size,
                uploadDate: new Date().toISOString()
            };
            state.files.push(fileObj);
            processFile(fileObj);
            processedCount++;
        }
    });
    if (processedCount > 0) {
        renderDocumentsList();
        showAlert(`Loaded ${processedCount} file(s)`, 'success');
    }
    else {
        if (files.length > 0 && !files.every(f => f.name.endsWith('.json'))) {
             showAlert('No valid files found. Please select PDF or image files.', 'warning');
        }
    }
}
async function processFile(fileObj) {
    try {
        if (fileObj.type === 'application/pdf') {
            await processPDF(fileObj);
        }
        else {
            await processImage(fileObj);
        }
    }
    catch (error) {
        showAlert(`Error processing ${fileObj.name}: ${error.message}`, 'error');
    }
}
async function processPDF(fileObj) {
    const arrayBuffer = await fileObj.file.arrayBuffer();
    const loadingTask = pdfjsLib.getDocument(arrayBuffer);
    const pdf = await loadingTask.promise;
    fileObj.totalPages = pdf.numPages;
    await pdf.destroy();
    renderDocumentsList();
}
async function processImage(fileObj) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = (e) => {
            const img = new Image();
            img.onload = () => {
                fileObj.image = img;
                fileObj.totalPages = 1;
                renderDocumentsList();
                resolve();
            };
            img.onerror = reject;
            img.src = e.target.result;
        };
        reader.onerror = reject;
        reader.readAsDataURL(fileObj.file);
    });
}
async function renderDocument() {
    if (!state.currentFile) {
        document.getElementById('emptyState').style.display = 'flex';
        document.getElementById('canvasWrapper').style.display = 'none';
        updateToolInfoPanel();
        return;
    }
    document.getElementById('emptyState').style.display = 'none';
    document.getElementById('canvasWrapper').style.display = 'inline-block';
    const canvas = document.getElementById('documentCanvas');
    const ctx = canvas.getContext('2d');
    const file = state.currentFile;
    const pageNum = state.currentPage;
    const rotation = (file.pageRotations && file.pageRotations[pageNum]) || 0;
    if (state.activeRenderTask) {
        try {
            state.activeRenderTask.cancel();
        }
        catch (e) { }
    }
    if (file.type === 'application/pdf') {
        try {
            if (!file.pdfDocument) { // Ensure PDF is loaded
                showLoading('Loading document...');
                const arrayBuffer = await file.file.arrayBuffer();
                file.pdfDocument = await pdfjsLib.getDocument(arrayBuffer).promise;
                hideLoading();
            }
            const page = await file.pdfDocument.getPage(pageNum);
            const viewport = page.getViewport({ scale: state.zoom, rotation: rotation });
            canvas.width = viewport.width;
            canvas.height = viewport.height;
            const renderContext = { canvasContext: ctx, viewport: viewport };
            state.activeRenderTask = page.render(renderContext);
            await state.activeRenderTask.promise;
            state.activeRenderTask = null;
        }
        catch (error) {
            if (error.name !== 'RenderingCancelledException') {
                console.error('Error rendering PDF page:', error);
                showAlert('Error rendering document page.', 'error');
            }
            return;
        }
    }
    else {
        const img = file.image;
        const w = img.width * state.zoom;
        const h = img.height * state.zoom;
        if (rotation === 90 || rotation === 270) {
            canvas.width = h;
            canvas.height = w;
        }
        else {
            canvas.width = w;
            canvas.height = h;
        }
        ctx.save();
        ctx.translate(canvas.width / 2, canvas.height / 2);
        ctx.rotate(rotation * Math.PI / 180);
        ctx.drawImage(img, -w / 2, -h / 2, w, h);
        ctx.restore();
    }
    const wrapper = document.getElementById('canvasWrapper');
    const overlayCanvas = document.getElementById('overlayCanvas');
    const docCanvas = document.getElementById('documentCanvas');
    wrapper.style.width = docCanvas.width + 'px';
    wrapper.style.height = docCanvas.height + 'px';
    overlayCanvas.style.left = docCanvas.offsetLeft + 'px';
    overlayCanvas.style.top = docCanvas.offsetTop + 'px';
    overlayCanvas.width = docCanvas.width;
    overlayCanvas.height = docCanvas.height;
    updatePageInfo();
    drawOverlays();
    updateToolInfoPanel();
    window.updateBatchInfo();
    const gridOcrBtn = document.getElementById('gridOcrBtn');
    if (state.grids.some(g => g.page === state.currentPage)) {
        gridOcrBtn.style.display = 'block';
    } else {
        gridOcrBtn.style.display = 'none';
    }
}
function updatePageInfo() {
    const t = translations[currentLang] || translations.en;
    document.getElementById('pageInfo').textContent =
        state.currentFile ? `${t.page_prefix} ${state.currentPage} / ${state.currentFile.totalPages}` : t.no_document;
    document.getElementById('zoomInfo').textContent = `${Math.round(state.zoom * 100)}%`;
}
function getHandlesForSelection(selection) {
    const { x, y, width, height } = selection;
    return {
        'top-left': { x: x, y: y, cursor: 'nwse-resize' },
        'top-right': { x: x + width, y: y, cursor: 'nesw-resize' },
        'bottom-left': { x: x, y: y + height, cursor: 'nesw-resize' },
        'bottom-right': { x: x + width, y: y + height, cursor: 'nwse-resize' },
        'top': { x: x + width / 2, y: y, cursor: 'ns-resize' },
        'bottom': { x: x + width / 2, y: y + height, cursor: 'ns-resize' },
        'left': { x: x, y: y + height / 2, cursor: 'ew-resize' },
        'right': { x: x + width, y: y + height / 2, cursor: 'ew-resize' }
    };
}
function getHandleAt(mouseX, mouseY) {
    const selectionsOnPage = (state.batchMode ? state.pendingBatchSelections : state.selections)
        .filter(s => s.page === state.currentPage);
    const handleRadius = 6 / state.zoom;
    for (let i = selectionsOnPage.length - 1; i >= 0; i--) {
        const sel = selectionsOnPage[i];
        const handles = getHandlesForSelection(sel);
        for (const handleName in handles) {
            const handle = handles[handleName];
            const dist = Math.sqrt(Math.pow(handle.x - mouseX, 2) + Math.pow(handle.y - mouseY, 2));
            if (dist <= handleRadius) {
                return { selectionId: sel.id, handle: handleName, cursor: handle.cursor };
            }
        }
    }
    return null;
}
function getGridCornerAt(grid, mouseX, mouseY) {
    if (!grid) return null;
    const { x, y, width, cells, cellHeight } = grid;
    const totalHeight = cells * cellHeight;
    const hitbox = 8 / state.zoom;
    const corners = {
        'top-left': { cx: x, cy: y },
        'top-right': { cx: x + width, cy: y },
        'bottom-left': { cx: x, cy: y + totalHeight },
        'bottom-right': { cx: x + width, cy: y + totalHeight }
    };
    for (const cornerName in corners) {
        const corner = corners[cornerName];
        if (Math.abs(mouseX - corner.cx) < hitbox && Math.abs(mouseY - corner.cy) < hitbox) {
            return cornerName;
        }
    }
    return null;
}
function getDividerAt(mouseX, mouseY) {
    const selectionsOnPage = (state.batchMode ? state.pendingBatchSelections : state.selections)
        .filter(s => s.page === state.currentPage);
    const dividerHitbox = 5 / state.zoom;
    for (const sel of selectionsOnPage) {
        if (sel.dividers && mouseX >= sel.x && mouseX <= sel.x + sel.width) {
            for (let i = 0; i < sel.dividers.length; i++) {
                const dividerY = sel.dividers[i].y;
                if (Math.abs(mouseY - (sel.y + dividerY)) < dividerHitbox) {
                    return { selectionId: sel.id, dividerIndex: i, cursor: 'row-resize' };
                }
            }
        }
    }
    return null;
}
function getSelectionAt(mouseX, mouseY) {
    const selectionsOnPage = (state.batchMode ? state.pendingBatchSelections : state.selections)
        .filter(s => s.page === state.currentPage);
    // Iterate backwards to pick the top-most selection
    for (let i = selectionsOnPage.length - 1; i >= 0; i--) {
        const sel = selectionsOnPage[i];
        if (mouseX >= sel.x && mouseX <= sel.x + sel.width && mouseY >= sel.y && mouseY <= sel.y + sel.height) {
            return sel;
        }
    }
    return null;
}
function getGridAt(mouseX, mouseY) {
    const gridsOnPage = state.grids.filter(g => g.page === state.currentPage);
    for (let i = gridsOnPage.length - 1; i >= 0; i--) {
        const grid = gridsOnPage[i];
        const { x, y, width, cells, cellHeight } = grid;
        const totalHeight = cells * cellHeight;
        if (mouseX >= x && mouseX <= x + width && mouseY >= y && mouseY <= y + totalHeight) {
            return grid;
        }
    }
    return null;
}
function updateCursor(e) {
    if (state.isResizing || state.isSelecting || state.isPanning || state.isEditingDivider || state.isResizingGrid || state.isMovingGrid) return;
    const overlay = e.target;
    const rect = overlay.getBoundingClientRect();
    const mouseX = (e.clientX - rect.left) / state.zoom;
    const mouseY = (e.clientY - rect.top) / state.zoom;
    
    const hoveredGrid = getGridAt(mouseX, mouseY);

    if (state.gridToolMode && state.gridDeleteMode && hoveredGrid) {
        overlay.style.cursor = 'pointer'; // maybe a custom trash cursor?
        return;
    }

    if (e.altKey && hoveredGrid) {
        overlay.style.cursor = 'move';
        return;
    }
    
    if (state.gridToolMode && hoveredGrid && e.ctrlKey) {
        const corner = getGridCornerAt(hoveredGrid, mouseX, mouseY);
        if (corner) {
            overlay.style.cursor = (corner === 'top-left' || corner === 'bottom-right') ? 'nwse-resize' : 'nesw-resize';
            return;
        }
    }
    
    if (state.dividerToolMode) {
        const divider = getDividerAt(mouseX, mouseY);
        if (divider) {
            overlay.style.cursor = divider.cursor;
            return;
        }
        const selection = getSelectionAt(mouseX, mouseY);
        if (selection) {
            overlay.style.cursor = 'copy'; 
            return;
        }
    } else if (state.gridToolMode) {
        if (hoveredGrid) {
             if (Math.abs(mouseX - hoveredGrid.x) < 5/state.zoom || Math.abs(mouseX - (hoveredGrid.x + hoveredGrid.width)) < 5/state.zoom) {
                overlay.style.cursor = 'ew-resize';
                return;
            }
            if (mouseX > hoveredGrid.x && mouseX < hoveredGrid.x + hoveredGrid.width) {
                overlay.style.cursor = 'cell';
                return;
            }
        }
    }

    const handle = getHandleAt(mouseX, mouseY);
    if (handle) {
        overlay.style.cursor = handle.cursor;
    } else if (state.panMode || state.spacePressed) {
        overlay.style.cursor = 'grab';
    } else {
        overlay.style.cursor = 'crosshair';
    }
}
function startInteraction(e) {
    if (!state.currentFile) return;

    if (state.panMode || state.spacePressed) {
        state.isPanning = true;
        const container = document.getElementById('canvasContainer');
        const containerRect = container.getBoundingClientRect();
        state.panStart = { x: e.clientX - containerRect.left, y: e.clientY - containerRect.top };
        state.scrollStart = { scrollLeft: container.scrollLeft, scrollTop: container.scrollTop };
        e.preventDefault();
        return;
    }

    const overlay = e.target;
    const rect = overlay.getBoundingClientRect();
    const mouseX = (e.clientX - rect.left) / state.zoom;
    const mouseY = (e.clientY - rect.top) / state.zoom;
    
    const clickedGrid = getGridAt(mouseX, mouseY);

    if (state.gridToolMode && state.gridDeleteMode && clickedGrid) {
        state.grids = state.grids.filter(g => g.id !== clickedGrid.id);
        pushHistory();
        renderDocument();
        showAlert('Grid deleted.', 'info');
        e.preventDefault();
        return;
    }

    if (e.altKey && clickedGrid) {
        state.isMovingGrid = true;
        state.activeGridId = clickedGrid.id;
        state.gridMoveStart = { mouseX, mouseY, gridX: clickedGrid.x, gridY: clickedGrid.y };
        e.preventDefault();
        return;
    }

    if (state.gridToolMode) {
        if (clickedGrid) {
             state.activeGridId = clickedGrid.id;
            if (e.ctrlKey) {
                const corner = getGridCornerAt(clickedGrid, mouseX, mouseY);
                if (corner) {
                    state.isResizingGridUnified = true;
                    state.resizingGridCorner = corner;
                    state.gridResizeStart = { ...clickedGrid, mouseX, mouseY };
                    e.preventDefault();
                    return;
                }
            }
            if (Math.abs(mouseX - clickedGrid.x) < 5/state.zoom) {
                state.isResizingGrid = true;
                state.resizingGridHandle = 'left';
                return;
            }
            if (Math.abs(mouseX - (clickedGrid.x + clickedGrid.width)) < 5/state.zoom) {
                state.isResizingGrid = true;
                state.resizingGridHandle = 'right';
                return;
            }
            if (mouseX >= clickedGrid.x && mouseX <= clickedGrid.x + clickedGrid.width) {
                state.gridToolState = 'adding';
                const gridTotalHeight = clickedGrid.cells * clickedGrid.cellHeight;
                const clickPosInGrid = mouseY - clickedGrid.y;
                const direction = (clickPosInGrid < gridTotalHeight / 2) ? 'up' : 'down';

                state.gridAddStart = {
                    mouseY: mouseY,
                    initialCells: clickedGrid.cells,
                    initialY: clickedGrid.y,
                    direction: direction
                };
                return;
            }
        }
        // If we're here, we are defining a new grid
        state.gridToolState = 'defining';
        state.selectionStart = { x: mouseX, y: mouseY };
        state.selectionEnd = { x: mouseX, y: mouseY };
        e.preventDefault();
        return;
    }

    if (state.dividerToolMode) {
        const dividerInfo = getDividerAt(mouseX, mouseY);
        if (dividerInfo) {
            state.isEditingDivider = true;
            const sel = (state.batchMode ? state.pendingBatchSelections : state.selections).find(s => s.id === dividerInfo.selectionId);
            state.editingDividerInfo = {
                selectionId: dividerInfo.selectionId,
                dividerIndex: dividerInfo.dividerIndex,
                originalY: sel.dividers[dividerInfo.dividerIndex].y
            };
            e.preventDefault();
            return;
        }
        const selection = getSelectionAt(mouseX, mouseY);
        if (selection) {
            if (!selection.dividers) selection.dividers = [];
            const newDividerY = mouseY - selection.y;
            selection.dividers.push({ y: newDividerY, size: state.dividerSize });
            selection.dividers.sort((a, b) => a.y - b.y);
            const newIndex = selection.dividers.findIndex(d => d.y === newDividerY);
            state.isEditingDivider = true;
            state.editingDividerInfo = {
                selectionId: selection.id,
                dividerIndex: newIndex,
                originalY: newDividerY
            };
            drawOverlays();
            e.preventDefault();
            return;
        }
    }

    const handle = getHandleAt(mouseX, mouseY);
    if (handle) {
        state.isResizing = true;
        state.resizingSelectionId = handle.selectionId;
        state.resizingHandle = handle.handle;
        const selections = state.batchMode ? state.pendingBatchSelections : state.selections;
        state.originalSelection = { ...selections.find(s => s.id === handle.selectionId) };
        e.preventDefault();
        return;
    }

    state.isSelecting = true;
    state.selectionStart = { x: mouseX, y: mouseY };
    state.selectionEnd = { x: mouseX, y: mouseY };
    e.preventDefault();
}
function updateInteraction(e) {
    if (!state.currentFile) return;

    if (state.isPanning && state.panStart && state.scrollStart) {
        const container = document.getElementById('canvasContainer');
        const containerRect = container.getBoundingClientRect();
        const currentMouseX = e.clientX - containerRect.left;
        const currentMouseY = e.clientY - containerRect.top;
        const dx = currentMouseX - state.panStart.x;
        const dy = currentMouseY - state.panStart.y;
        container.scrollLeft = state.scrollStart.scrollLeft - dx;
        container.scrollTop = state.scrollStart.scrollTop - dy;
        return;
    }

    const overlay = e.target;
    const rect = overlay.getBoundingClientRect();
    const mouseX = (e.clientX - rect.left) / state.zoom;
    const mouseY = (e.clientY - rect.top) / state.zoom;

    const activeGrid = state.grids.find(g => g.id === state.activeGridId);
    if (!activeGrid && (state.isMovingGrid || state.isResizingGrid || state.isResizingGridUnified || state.gridToolState === 'adding')) {
        return; // No active grid to modify
    }

    if (state.isMovingGrid) {
        const { mouseX: startMouseX, mouseY: startMouseY, gridX, gridY } = state.gridMoveStart;
        const dx = mouseX - startMouseX;
        const dy = mouseY - startMouseY;
        activeGrid.x = gridX + dx;
        activeGrid.y = gridY + dy;
        drawOverlays();
        return;
    }
    
    if (state.isResizingGridUnified) {
        const start = state.gridResizeStart;
        let newX = start.x, newY = start.y, newWidth = start.width, newCellHeight = start.cellHeight;
        const dx = mouseX - start.mouseX;
        const dy = mouseY - start.mouseY;

        switch (state.resizingGridCorner) {
            case 'top-left':
                newX = mouseX; newY = mouseY; newWidth = start.width - dx; newCellHeight = start.cellHeight - (dy / start.cells);
                break;
            case 'top-right':
                newY = mouseY; newWidth = start.width + dx; newCellHeight = start.cellHeight - (dy / start.cells);
                break;
            case 'bottom-left':
                newX = mouseX; newWidth = start.width - dx; newCellHeight = start.cellHeight + (dy / start.cells);
                break;
            case 'bottom-right':
                newWidth = start.width + dx; newCellHeight = start.cellHeight + (dy / start.cells);
                break;
        }
        if (newWidth > 10 && newCellHeight > 10) {
            activeGrid.x = newX;
            activeGrid.y = newY;
            activeGrid.width = newWidth;
            activeGrid.cellHeight = newCellHeight;
        }
        drawOverlays();
        return;
    }
    if (state.isResizingGrid) {
        const originalX = activeGrid.x;
        const originalWidth = activeGrid.width;
        if (state.resizingGridHandle === 'left') {
            activeGrid.x = mouseX;
            activeGrid.width = originalX + originalWidth - mouseX;
        } else { // right
            activeGrid.width = mouseX - originalX;
        }
        drawOverlays();
        return;
    } else if (state.gridToolState === 'adding') {
        const start = state.gridAddStart;
        const dy = mouseY - start.mouseY;
        const cellsChange = Math.round(dy / activeGrid.cellHeight);

        if (start.direction === 'up') {
            let newCells = start.initialCells - cellsChange;
            if (newCells < 1) newCells = 1;
            
            const cellsAddedOrRemoved = newCells - start.initialCells;
            activeGrid.cells = newCells;
            activeGrid.y = start.initialY - (cellsAddedOrRemoved * activeGrid.cellHeight);
        } else { // 'down'
            let newCells = start.initialCells + cellsChange;
            if (newCells < 1) newCells = 1;
            activeGrid.cells = newCells;
            activeGrid.y = start.initialY;
        }

        drawOverlays();
        return;
    } else if (state.gridToolState === 'defining') {
        state.selectionEnd = { x: mouseX, y: mouseY };
        drawCurrentSelection();
        return;
    }

    if (state.isEditingDivider) {
        const { selectionId, dividerIndex } = state.editingDividerInfo;
        const sel = (state.batchMode ? state.pendingBatchSelections : state.selections).find(s => s.id === selectionId);
        if (sel) {
            const newDividerY = mouseY - sel.y;
            if (mouseY < sel.y || mouseY > sel.y + sel.height) {
                state.editingDividerInfo.delete = true;
            } else {
                state.editingDividerInfo.delete = false;
            }
            sel.dividers[dividerIndex].y = newDividerY;
            drawOverlays();
        }
    }
    else if (state.isResizing) {
        const selections = state.batchMode ? state.pendingBatchSelections : state.selections;
        const sel = selections.find(s => s.id === state.resizingSelectionId);
        const original = state.originalSelection;
        let { x, y, width, height } = original;
        switch (state.resizingHandle) {
            case 'top-left': x = mouseX; y = mouseY; width = original.x + original.width - mouseX; height = original.y + original.height - mouseY; break;
            case 'top-right': y = mouseY; width = mouseX - original.x; height = original.y + original.height - mouseY; break;
            case 'bottom-left': x = mouseX; width = original.x + original.width - mouseX; height = mouseY - original.y; break;
            case 'bottom-right': width = mouseX - original.x; height = mouseY - original.y; break;
            case 'top': y = mouseY; height = original.y + original.height - mouseY; break;
            case 'bottom': height = mouseY - original.y; break;
            case 'left': x = mouseX; width = original.x + original.width - mouseX; break;
            case 'right': width = mouseX - original.x; break;
        }
        sel.x = (width < 0) ? x + width : x;
        sel.y = (height < 0) ? y + height : y;
        sel.width = Math.abs(width);
        sel.height = Math.abs(height);
        drawOverlays();
    }
    else if (state.isSelecting) {
        state.selectionEnd = { x: mouseX, y: mouseY };
        drawCurrentSelection();
    }
}
async function endInteraction(e) {
    if (state.isPanning) {
        state.isPanning = false;
        return;
    }
    
    if (state.isMovingGrid || state.isResizingGridUnified || state.isResizingGrid || state.gridToolState === 'adding') {
        const activeGrid = state.grids.find(g => g.id === state.activeGridId);
        if (activeGrid) {
             if (activeGrid.width < 0) {
                activeGrid.x += activeGrid.width;
                activeGrid.width = Math.abs(activeGrid.width);
            }
            if (activeGrid.cellHeight < 0) {
                activeGrid.y += activeGrid.cells * activeGrid.cellHeight;
                activeGrid.cellHeight = Math.abs(activeGrid.cellHeight);
            }
        }
        state.isMovingGrid = false;
        state.isResizingGridUnified = false;
        state.isResizingGrid = false;
        state.gridToolState = 'idle';
        state.activeGridId = null;
        pushHistory();
        renderDocument();
        return;
    }

    if (state.gridToolMode) {
        if (state.gridToolState === 'defining') {
            const x = Math.min(state.selectionStart.x, state.selectionEnd.x);
            const y = Math.min(state.selectionStart.y, state.selectionEnd.y);
            const width = Math.abs(state.selectionEnd.x - state.selectionStart.x);
            const height = Math.abs(state.selectionEnd.y - state.selectionStart.y);
            if (width > 5 && height > 5) {
                const newGrid = {
                    id: 'grid_' + Date.now(),
                    x, y, width,
                    cellHeight: height,
                    cells: 1,
                    page: state.currentPage,
                };
                state.grids.push(newGrid);
                pushHistory();
            }
            state.gridToolState = 'idle';
            state.selectionStart = null;
            state.selectionEnd = null;
            clearSelectionOverlay();
            renderDocument();
            return;
        }
    }

    if (state.isEditingDivider) {
        const { selectionId, dividerIndex, delete: shouldDelete } = state.editingDividerInfo;
        const sel = (state.batchMode ? state.pendingBatchSelections : state.selections).find(s => s.id === selectionId);
        if (sel) {
            if (shouldDelete) {
                sel.dividers.splice(dividerIndex, 1);
                 showAlert('Divider deleted.', 'info');
            } else {
                sel.dividers.sort((a,b) => a.y - b.y);
            }
            if (!state.batchMode) {
                 debouncedPerformOCR(sel, sel.number);
            }
            pushHistory();
        }
        state.isEditingDivider = false;
        state.editingDividerInfo = null;
        drawOverlays();
        return;
    }
    if (state.isResizing) {
        state.isResizing = false;
        if (!state.batchMode) {
            const selections = state.batchMode ? state.pendingBatchSelections : state.selections;
            const resizedSelection = selections.find(s => s.id === state.resizingSelectionId);
            const resultBlock = document.getElementById(`result-block-${resizedSelection.id}`);
            if (resultBlock) {
                const textarea = resultBlock.querySelector(`#result-${resizedSelection.id}`);
                if (textarea) {
                    textarea.value = 'Processing...';
                    textarea.disabled = true;
                }
            }
            debouncedPerformOCR(resizedSelection, resizedSelection.number);
        }
        state.resizingSelectionId = null;
        state.resizingHandle = null;
        state.originalSelection = null;
        pushHistory();
        renderDocument();
    }
    else if (state.isSelecting) {
        state.isSelecting = false;
        const x = Math.min(state.selectionStart.x, state.selectionEnd.x);
        const y = Math.min(state.selectionStart.y, state.selectionEnd.y);
        const width = Math.abs(state.selectionEnd.x - state.selectionStart.x);
        const height = Math.abs(state.selectionEnd.y - state.selectionStart.y);
        state.selectionStart = null;
        state.selectionEnd = null;
        clearSelectionOverlay();
        if (width < 10 || height < 10) {
            renderDocument();
            return;
        }
        const selection = { id: 'sel_' + Date.now(), x, y, width, height, page: state.currentPage, dividers: [] };
        if (state.batchMode) {
            state.pendingBatchSelections.push(selection);
            showAlert(`Selection added to batch (Page ${state.currentPage}).`, 'info');
            window.updateBatchInfo();
        }
        else {
            selection.number = state.selections.length + 1;
            state.selections.push(selection);
            renderResults();
            performOCROnSelection(selection, selection.number); // Runs OCR and updates
        }
        pushHistory();
        await renderDocument();
    }
}
function cancelInteraction(e) {
    if (state.isResizing) {
        const selections = state.batchMode ? state.pendingBatchSelections : state.selections;
        const index = selections.findIndex(s => s.id === state.resizingSelectionId);
        if (index > -1)
            selections[index] = state.originalSelection;
        state.isResizing = false;
    }
    if (state.isEditingDivider) {
        const { selectionId, dividerIndex, delete: shouldDelete } = state.editingDividerInfo;
        const sel = (state.batchMode ? state.pendingBatchSelections : state.selections).find(s => s.id === selectionId);
        if (sel) {
            if (shouldDelete) {
                sel.dividers.splice(dividerIndex, 1);
                showAlert('Divider deleted.', 'info');
            } else {
                sel.dividers[dividerIndex].y = state.editingDividerInfo.originalY;
                sel.dividers.sort((a, b) => a.y - b.y);
            }
        }
        state.isEditingDivider = false;
        state.editingDividerInfo = null;
    }
    state.isPanning = false;
    state.isSelecting = false;
    state.isMovingGrid = false;
    state.isResizingGrid = false;
    state.gridToolState = 'idle';
    state.activeGridId = null;
    state.selectionStart = state.selectionEnd = null;
    clearSelectionOverlay();
    renderDocument();
}
function drawCurrentSelection() {
    if (!state.selectionStart || !state.selectionEnd)
        return;
    const overlayCanvas = document.getElementById('overlayCanvas');
    const ctx = overlayCanvas.getContext('2d');
    ctx.clearRect(0, 0, overlayCanvas.width, overlayCanvas.height);
    const x = Math.min(state.selectionStart.x, state.selectionEnd.x) * state.zoom;
    const y = Math.min(state.selectionStart.y, state.selectionEnd.y) * state.zoom;
    const width = Math.abs(state.selectionEnd.x - state.selectionStart.x) * state.zoom;
    const height = Math.abs(state.selectionEnd.y - state.selectionStart.y) * state.zoom;
    const color = 'rgba(59, 130, 246, 0.2)';
    const stroke = '#3b82f6';
    ctx.fillStyle = color;
    ctx.fillRect(x, y, width, height);
    ctx.strokeStyle = stroke;
    ctx.lineWidth = 2 * state.zoom;
    ctx.strokeRect(x, y, width, height);
}
function clearSelectionOverlay() {
    const overlayCanvas = document.getElementById('overlayCanvas');
    if (overlayCanvas) {
        const ctx = overlayCanvas.getContext('2d');
        ctx.clearRect(0, 0, overlayCanvas.width, overlayCanvas.height);
    }
}
function hslToRgb(h, s, l) {
    s /= 100;
    l /= 100;
    let c = (1 - Math.abs(2 * l - 1)) * s, x = c * (1 - Math.abs((h / 60) % 2 - 1)), m = l - c / 2, r = 0, g = 0, b = 0;
    if (0 <= h && h < 60) {
        r = c;
        g = x;
        b = 0;
    }
    else if (60 <= h && h < 120) {
        r = x;
        g = c;
        b = 0;
    }
    else if (120 <= h && h < 180) {
        r = 0;
        g = c;
        b = x;
    }
    else if (180 <= h && h < 240) {
        r = 0;
        g = x;
        b = c;
    }
    else if (240 <= h && h < 300) {
        r = x;
        g = 0;
        b = c;
    }
    else if (300 <= h && h < 360) {
        r = c;
        g = 0;
        b = x;
    }
    return { r: Math.round((r + m) * 255), g: Math.round((g + m) * 255), b: Math.round((b + m) * 255) };
}
function drawOverlays() {
    const overlayCanvas = document.getElementById('overlayCanvas');
    const ctx = overlayCanvas.getContext('2d');
    ctx.clearRect(0, 0, overlayCanvas.width, overlayCanvas.height);
    drawSelections();
    state.grids
        .filter(g => g.page === state.currentPage)
        .forEach(drawGrid);
}
const dividerColors = [
    'rgba(239, 68, 68, 0.9)',   // 1 (Red)
    'rgba(249, 115, 22, 0.9)',  // 2 (Orange)
    'rgba(234, 179, 8, 0.9)',   // 3 (Amber)
    'rgba(132, 204, 22, 0.9)',  // 4 (Lime)
    'rgba(34, 197, 94, 0.9)',   // 5 (Green)
    'rgba(20, 184, 166, 0.9)',  // 6 (Teal)
    'rgba(59, 130, 246, 0.9)',  // 7 (Blue)
    'rgba(139, 92, 246, 0.9)',  // 8 (Violet)
    'rgba(217, 70, 239, 0.9)'   // 9 (Fuchsia)
];
function drawSelections() {
    let selectionsToDraw = state.batchMode ? state.pendingBatchSelections : state.selections;

    if (!state.batchMode && !state.preferences.keepSelections && selectionsToDraw.length > 0) {
        selectionsToDraw = [selectionsToDraw[selectionsToDraw.length - 1]];
    }

    const overlayCanvas = document.getElementById('overlayCanvas');
    const ctx = overlayCanvas.getContext('2d');

    selectionsToDraw.forEach((sel, index) => {
        if (sel.isGridResult && state.gridToolMode) return;
        if (sel.page !== state.currentPage) return;
        const colorString = state.batchMode ? window.getPageColor(sel.page) : '#3b82f6';
        let colorRgb;
        if (colorString.startsWith('hsl')) {
            const [h, s, l] = colorString.match(/\d+/g).map(Number);
            colorRgb = hslToRgb(h, s, l);
        } else {
            const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(colorString);
            colorRgb = result ? { r: parseInt(result[1], 16), g: parseInt(result[2], 16), b: parseInt(result[3], 16) } : { r: 59, g: 130, b: 246 };
        }
        ctx.fillStyle = `rgba(${colorRgb.r}, ${colorRgb.g}, ${colorRgb.b}, 0.15)`;
        ctx.fillRect(sel.x * state.zoom, sel.y * state.zoom, sel.width * state.zoom, sel.height * state.zoom);
        ctx.strokeStyle = colorString;
        ctx.lineWidth = 1.5 * state.zoom;
        ctx.strokeRect(sel.x * state.zoom, sel.y * state.zoom, sel.width * state.zoom, sel.height * state.zoom);
        
        // Draw dividers
        if (sel.dividers) {
            ctx.lineWidth = 1 * state.zoom;
            ctx.setLineDash([4 * state.zoom, 4 * state.zoom]);
            sel.dividers.forEach(divider => {
                ctx.strokeStyle = dividerColors[divider.size - 1] || 'rgba(239, 68, 68, 0.9)';
                const yPos = (sel.y + divider.y) * state.zoom;
                ctx.beginPath();
                ctx.moveTo(sel.x * state.zoom, yPos);
                ctx.lineTo((sel.x + sel.width) * state.zoom, yPos);
                ctx.stroke();
            });
            ctx.setLineDash([]);
        }

        const handleRadius = 4 * Math.max(0.5, Math.min(1.5, state.zoom / 2));
        ctx.fillStyle = 'white';
        ctx.lineWidth = Math.max(0.5, 1 * state.zoom);
        const handles = getHandlesForSelection(sel);
        for (const handleName in handles) {
            const handle = handles[handleName];
            ctx.beginPath();
            ctx.arc(handle.x * state.zoom, handle.y * state.zoom, handleRadius, 0, 2 * Math.PI);
            ctx.fill();
            ctx.stroke();
        }
    });
}
function drawGrid(grid) {
    if (!grid) return;
    const overlayCanvas = document.getElementById('overlayCanvas');
    const ctx = overlayCanvas.getContext('2d');
    
    ctx.strokeStyle = '#8b5cf6';
    ctx.fillStyle = 'rgba(139, 92, 246, 0.1)';
    ctx.lineWidth = 1.5 * state.zoom;

    for (let i = 0; i < grid.cells; i++) {
        const y = (grid.y + i * grid.cellHeight) * state.zoom;
        const x = grid.x * state.zoom;
        const width = grid.width * state.zoom;
        const height = grid.cellHeight * state.zoom;
        ctx.fillRect(x, y, width, height);
        ctx.strokeRect(x, y, width, height);
    }
    
    const handleSize = 8 * Math.max(0.5, Math.min(1.5, state.zoom / 2));
    ctx.fillStyle = 'white';
    ctx.strokeStyle = '#8b5cf6';

    const leftHandleX = grid.x * state.zoom;
    const rightHandleX = (grid.x + grid.width) * state.zoom;
    const midY = (grid.y + (grid.cells * grid.cellHeight) / 2) * state.zoom;

    ctx.fillRect(leftHandleX - handleSize / 2, midY - handleSize / 2, handleSize, handleSize);
    ctx.strokeRect(leftHandleX - handleSize / 2, midY - handleSize / 2, handleSize, handleSize);
    ctx.fillRect(rightHandleX - handleSize / 2, midY - handleSize / 2, handleSize, handleSize);
    ctx.strokeRect(rightHandleX - handleSize / 2, midY - handleSize / 2, handleSize, handleSize);
}
async function getHighResPageCanvas(pageNum) {
    if (!state.currentFile) return null;
    const file = state.currentFile;
    const ocrScale = 5.0; // 500% zoom for OCR
    const rotation = (file.pageRotations && file.pageRotations[pageNum]) || 0;
    
    const offscreenCanvas = document.createElement('canvas');
    const ctx = offscreenCanvas.getContext('2d');

    if (file.type === 'application/pdf') {
        if (!file.pdfDocument) {
            console.warn("PDF document object not available for high-res rendering. Aborting.");
            return null;
        }
        const page = await file.pdfDocument.getPage(pageNum);
        const viewport = page.getViewport({ scale: ocrScale, rotation });
        offscreenCanvas.width = viewport.width;
        offscreenCanvas.height = viewport.height;
        const renderContext = { canvasContext: ctx, viewport };
        await page.render(renderContext).promise;
    } else { // Image
        const img = file.image;
        if (!img) return null;
        const w = img.width * ocrScale;
        const h = img.height * ocrScale;
        if (rotation === 90 || rotation === 270) {
            offscreenCanvas.width = h;
            offscreenCanvas.height = w;
        } else {
            offscreenCanvas.width = w;
            offscreenCanvas.height = h;
        }
        ctx.save();
        ctx.translate(offscreenCanvas.width / 2, offscreenCanvas.height / 2);
        ctx.rotate(rotation * Math.PI / 180);
        ctx.drawImage(img, -w / 2, -h / 2, w, h);
        ctx.restore();
    }
    return offscreenCanvas;
}
window.processGrid = async function processGrid() {
    const gridsOnPage = state.grids.filter(g => g.page === state.currentPage);
    if (gridsOnPage.length === 0 || !state.tesseractWorker) {
        showAlert('No grids to process or OCR engine not ready.', 'error');
        return;
    }
    
    showLoading(`Processing ${gridsOnPage.length} grid(s)...`);

    const ocrScale = 5.0;
    const highResCanvas = await getHighResPageCanvas(state.currentPage);
    if (!highResCanvas) {
        hideLoading();
        showAlert('Failed to render high-resolution page for grid OCR.', 'error');
        return;
    }
    
    for (const grid of gridsOnPage) {
        const results = [];
        for (let i = 0; i < grid.cells; i++) {
            const cellY = grid.y + (i * grid.cellHeight);
            const rect = {
                left: grid.x * ocrScale,
                top: cellY * ocrScale,
                width: grid.width * ocrScale,
                height: grid.cellHeight * ocrScale,
            };
            
            if (rect.width <= 0 || rect.height <= 0) {
                results.push('');
                continue;
            }

            const tempCanvas = document.createElement('canvas');
            tempCanvas.width = rect.width;
            tempCanvas.height = rect.height;
            const tempCtx = tempCanvas.getContext('2d');
            tempCtx.drawImage(highResCanvas, rect.left, rect.top, rect.width, rect.height, 0, 0, rect.width, rect.height);
            
            const { data: { text: rawText } } = await state.tesseractWorker.recognize(tempCanvas);
            const cleanedText = applyCleaner(rawText).trim();
            results.push(cleanedText);
        }

        const finalText = results.join('\n');
        const newSelection = {
            id: 'grid_result_' + grid.id,
            number: state.selections.length + 1,
            page: grid.page,
            text: finalText,
            x: grid.x,
            y: grid.y,
            width: grid.width,
            height: grid.cellHeight * grid.cells,
            isGridResult: true,
        };

        const existingIndex = state.selections.findIndex(s => s.id === newSelection.id);
        if (existingIndex > -1) {
             state.selections[existingIndex] = {
                ...state.selections[existingIndex],
                ...newSelection,
                number: state.selections[existingIndex].number // Keep original number
            };
        } else {
            state.selections.push(newSelection);
        }
    }
    
    pushHistory();
    renderDocument();
    renderResults();
    hideLoading();
    showAlert('Grid processing complete.', 'success');
}
function applyCleaner(text) {
    let cleanedText = text;
    const { filterList, removeNumbers, numberLengthThreshold, replacements, ocrOnlyList, ocrOnlyEnabled } = state.cleanerRules;

    // 0. Apply OCR Only Whitelist
    if (ocrOnlyEnabled && ocrOnlyList && ocrOnlyList.length > 0) {
        const escapedWords = ocrOnlyList.map(w => w.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&'));
        const whitelistRegex = new RegExp(`(${escapedWords.join('|')})`, 'gi');
        const matches = cleanedText.match(whitelistRegex);
        cleanedText = matches ? matches.join('\n') : '';
    }

    // 1. Apply replacements
    if (replacements && replacements.length > 0) {
        replacements.forEach(rule => {
            const findRegex = new RegExp(rule.find.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&'), 'gi');
            cleanedText = cleanedText.replace(findRegex, rule.replace);
        });
    }

    // 2. Apply filter list (word/phrase removal)
    if (filterList && filterList.length > 0) {
        const escapedFilters = filterList.map(f => f.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&'));
        const filterRegex = new RegExp(escapedFilters.join('|'), 'gi');
        cleanedText = cleanedText.replace(filterRegex, '');
    }
    
    // 3. Apply number filtering
    if (removeNumbers && numberLengthThreshold > 0) {
        const threshold = numberLengthThreshold;
        const numberRegex = new RegExp(`\\b\\d{${threshold},}\\b`, 'g');
        cleanedText = cleanedText.replace(numberRegex, '');
    }

    // 4. Final whitespace cleanup: remove extra spaces, trim lines, and remove empty lines.
    cleanedText = cleanedText
        .split('\n')
        .map(line => line.replace(/\s+/g, ' ').trim())
        .filter(line => line !== '')
        .join('\n');
    
    return cleanedText;
}
async function performOCROnSelection(selection, selectionNumber) {
    if (!state.tesseractWorker || !selection) {
        showAlert('OCR engine not ready or selection is invalid.', 'error');
        return;
    }
    try {
        const ocrScale = 5.0;
        const highResCanvas = await getHighResPageCanvas(selection.page);
        if (!highResCanvas) {
            throw new Error("Could not render high-resolution page for OCR.");
        }

        // If there are no dividers, process normally
        if (!selection.dividers || selection.dividers.length === 0) {
            const tempCanvas = document.createElement('canvas');
            const tempCtx = tempCanvas.getContext('2d');
            const rect = {
                left: selection.x * ocrScale,
                top: selection.y * ocrScale,
                width: selection.width * ocrScale,
                height: selection.height * ocrScale,
            };
            
            if (rect.width <= 0 || rect.height <= 0) {
                 selection.text = ''; // Empty text for invalid selection size
            } else {
                tempCanvas.width = rect.width;
                tempCanvas.height = rect.height;
                tempCtx.drawImage(highResCanvas, rect.left, rect.top, rect.width, rect.height, 0, 0, rect.width, rect.height);
                const { data: { text: rawText } } = await state.tesseractWorker.recognize(tempCanvas);
                selection.text = applyCleaner(rawText);
            }
        } else {
            // Process with dividers
            const sortedDividers = [...selection.dividers].sort((a,b) => a.y - b.y);
            const yBoundaries = [0, ...sortedDividers.map(d => d.y), selection.height];

            const results = [];
            for (let i = 0; i < yBoundaries.length - 1; i++) {
                const y1 = yBoundaries[i];
                const y2 = yBoundaries[i+1];
                if (y2 > y1) {
                    const subRegionHeight = y2 - y1;
                    const tempCanvas = document.createElement('canvas');
                    const tempCtx = tempCanvas.getContext('2d');
                    const rect = {
                       left: selection.x * ocrScale,
                       top: (selection.y + y1) * ocrScale,
                       width: selection.width * ocrScale,
                       height: subRegionHeight * ocrScale
                   };

                   if (rect.width <= 0 || rect.height <= 0) {
                        results.push('');
                        continue;
                   }

                   tempCanvas.width = rect.width;
                   tempCanvas.height = rect.height;
                   tempCtx.drawImage(highResCanvas, rect.left, rect.top, rect.width, rect.height, 0, 0, rect.width, rect.height);
                   const { data: { text: rawText } } = await state.tesseractWorker.recognize(tempCanvas);
                   results.push(applyCleaner(rawText));
                }
            }
            
            const lines = [];
            results.forEach((part, index) => {
                if (part) {
                    lines.push(...part.split('\n'));
                }
                if (index < sortedDividers.length) {
                    const divider = sortedDividers[index];
                    for (let i = 0; i < divider.size; i++) {
                        lines.push('');
                    }
                }
            });
            selection.text = lines.join('\n');
        }

        selection.number = selectionNumber;

        const resultBlock = document.getElementById(`result-block-${selection.id}`);
        if (resultBlock) {
            const textarea = resultBlock.querySelector(`#result-${selection.id}`);
            if (textarea) {
                textarea.value = selection.text;
                textarea.disabled = false;
            }
        }
        showAlert(`Selection ${selectionNumber} processed`, 'success');
        pushHistory();
    }
    catch (error) {
        console.error('OCR processing error:', error);
        const resultBlock = document.getElementById(`result-block-${selection.id}`);
        if (resultBlock) {
            const textarea = resultBlock.querySelector(`#result-${selection.id}`);
            if (textarea) {
                textarea.value = `OCR Error: ${error.message}`;
                textarea.disabled = false;
            }
        }
        showAlert(`OCR failed for selection ${selectionNumber}`, 'error');
    }
}
function updateBatchToggleButton() {
    const btn = document.getElementById('batchToggleBtn');
    const text = document.getElementById('batchToggleText');
    const t = translations[currentLang] || translations.en;
    if (state.batchMode) {
        btn.classList.remove('disabled');
        btn.style.background = '#10b981';
        text.textContent = t.batch_mode_on;
    }
    else {
        btn.classList.add('disabled');
        btn.style.background = '#dc2626';
        text.textContent = t.batch_mode_off;
    }
}
function handleResultTextChange(selectionId, newText) {
    const selection = state.selections.find(s => s.id === selectionId);
    if (selection && selection.text !== newText) {
        selection.text = newText;
        debouncedPushHistory();
    }
}
function addResult(selection) {
    const container = document.getElementById('resultsContainer');
    const blockId = `result-block-${selection.id}`;
    if (document.getElementById(blockId)) return;
    
    const t = translations[currentLang] || translations.en;
    const title = `${t.selection} ${selection.number} (${t.page} ${selection.page})`;
    
    const resultBlock = document.createElement('div');
    resultBlock.className = 'result-block';
    resultBlock.id = blockId;
    const isProcessing = selection.text === undefined;

    resultBlock.innerHTML = `
        <div class="result-header">
            <div class="result-title">${title}</div>
            <div class="result-actions">
                <button class="icon-btn" onclick="window.swapCommasAndDots('${selection.id}')" title="Swap Commas and Dots"><svg style="width:16px;height:16px;" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"></path></svg></button>
                <button class="icon-btn" onclick="window.addToWhitelist('${selection.id}')" title="Add to Whitelist">
                    <svg style="width:16px;height:16px;" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                </button>
                <button class="icon-btn" onclick="window.addToFilter('${selection.id}')" title="Add to Filter List">
                    <svg style="width:16px;height:16px;" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2a1 1 0 01-.293.707L16 11.414V16a1 1 0 01-.293.707l-2 2A1 1 0 0112 18v-4.586l-3.707-3.707A1 1 0 018 9V4z"></path></svg>
                </button>
                <button class="icon-btn" onclick="window.cleanBlankSpaces('${selection.id}')" title="Remove blank spaces">
                    <svg style="width:16px;height:16px;" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7v10m16-10v10M8 7h8m-8 3h8m-8 4h8"></path></svg>
                </button>
                <button class="icon-btn" onclick="window.toggleDeleteLineMode('${selection.id}')" title="Delete a line">
                     <svg style="width:16px;height:16px;" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                </button>
                <button class="icon-btn" onclick="window.deleteResult('${selection.id}')" title="Delete Result">
                    <svg style="width:16px;height:16px;" class="text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                </button>
            </div>
        </div>
        <textarea class="result-content" id="result-${selection.id}" ${isProcessing ? 'disabled' : ''} oninput="this.style.height = 'auto'; this.style.height = this.scrollHeight + 'px';">${isProcessing ? t.processing : selection.text || ''}</textarea>
        <div class="result-meta">
            <span>${t.coordinates}: (${Math.round(selection.x)}, ${Math.round(selection.y)})</span>
            <span>${t.size}: ${Math.round(selection.width)} x ${Math.round(selection.height)}</span>
        </div>
        <div class="export-section">
            <button class="btn btn-copy" onclick="window.copyResult('${selection.id}')">${t.copy}</button>
            <button class="btn btn-export" onclick="window.exportResult('${selection.id}', 'txt')">TXT</button>
            <button class="btn btn-export" onclick="window.exportResult('${selection.id}', 'csv')">CSV</button>
            <button class="btn btn-export" onclick="window.exportResult('${selection.id}', 'json')">JSON</button>
        </div>
    `;
    container.appendChild(resultBlock);
    const textarea = resultBlock.querySelector(`#result-${selection.id}`);
    textarea.addEventListener('input', (e) => {
        handleResultTextChange(selection.id, e.target.value);
    });
}
function renderResults() {
    const container = document.getElementById('resultsContainer');
    const activeElement = document.activeElement;
    const activeId = activeElement?.id;
    const selectionStart = activeElement?.selectionStart;
    const selectionEnd = activeElement?.selectionEnd;
    const textareaHeights = {};
    container.querySelectorAll('textarea.result-content').forEach(ta => {
        const textarea = ta;
        if (textarea.style.height) {
            textareaHeights[textarea.id] = textarea.style.height;
        }
    });
    container.innerHTML = '';
    if (state.selections.length === 0) {
        container.innerHTML = `<div class="alert alert-info">${translations[currentLang].results_placeholder}</div>`;
    }
    else {
        state.selections.sort((a, b) => a.number - b.number).forEach(addResult);
    }
    Object.keys(textareaHeights).forEach(id => {
        const textarea = document.getElementById(id);
        if (textarea && textareaHeights[id]) {
            textarea.style.height = textareaHeights[id];
        }
    });
    if (activeId && activeId.startsWith('result-')) {
        const newActiveElement = document.getElementById(activeId);
        if (newActiveElement) {
            newActiveElement.focus();
            if (selectionStart !== undefined && selectionEnd !== undefined) {
                newActiveElement.setSelectionRange(selectionStart, selectionEnd);
            }
        }
    }
    window.updateBatchInfo();
}
function downloadFile(content, filename, mimeType) {
    const blob = new Blob([content], { type: mimeType });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    showAlert(`Downloaded: ${filename}`, 'success');
}
function showLoading(text) {
    document.getElementById('loadingText').innerHTML = text;
    document.getElementById('loadingOverlay').style.display = 'flex';
}
function hideLoading() {
    document.getElementById('loadingOverlay').style.display = 'none';
}
function showAlert(message, type) {
    const alertContainer = document.getElementById('alertContainer');
    if (!alertContainer)
        return;
    const alert = document.createElement('div');
    alert.className = `alert alert-${type}`;
    alert.textContent = message;
    alertContainer.appendChild(alert);
    setTimeout(() => {
        alert.remove();
    }, 4000);
}
function initializeAppSettings() {
    // Cleaner settings
    try {
        const savedRules = localStorage.getItem('ocrCleanerRules');
        if (savedRules) {
            const parsedRules = JSON.parse(savedRules);
            if (parsedRules) {
                state.cleanerRules = {
                    ...{
                        ocrOnlyEnabled: false,
                        ocrOnlyList: [],
                        filterList: [],
                        removeNumbers: false,
                        numberLengthThreshold: 5,
                        replacements: [],
                    },
                    ...parsedRules
                };
            }
        }
    }
    catch (e) {
        console.error("Could not load cleaner settings from localStorage", e);
        localStorage.removeItem('ocrCleanerRules');
    }
    // Preferences
    try {
        const savedPrefs = localStorage.getItem('ocrPreferences');
        if (savedPrefs) {
            const parsedPrefs = JSON.parse(savedPrefs);
            if (parsedPrefs) {
                state.preferences = { ...state.preferences, ...parsedPrefs };
            }
        }
    } catch (e) {
        console.error("Could not load preferences from localStorage", e);
        localStorage.removeItem('ocrPreferences');
    }

    // Language
    const savedLang = localStorage.getItem('ocrLanguage') || 'en';
    const langSelector = document.getElementById('languageSelector');
    if (langSelector) {
        langSelector.value = savedLang;
    }
    applyLanguage(savedLang);
}
function renderOcrOnlyTags() {
    const container = document.getElementById('ocrOnlyTagsContainer');
    if (!container) return;
    container.innerHTML = '';
    state.cleanerRules.ocrOnlyList.forEach(tag => {
        const tagEl = document.createElement('div');
        tagEl.className = 'cleaner-tag';
        tagEl.textContent = tag;
        const removeEl = document.createElement('span');
        removeEl.className = 'cleaner-tag-remove';
        removeEl.innerHTML = '&times;';
        removeEl.style.marginLeft = '8px';
        removeEl.onclick = () => {
            state.cleanerRules.ocrOnlyList = state.cleanerRules.ocrOnlyList.filter(t => t !== tag);
            saveCleanerRules();
            renderOcrOnlyTags();
        };
        tagEl.appendChild(removeEl);
        container.appendChild(tagEl);
    });
}
function renderCleanerTags() {
    const container = document.getElementById('cleanerTagsContainer');
    if (!container)
        return;
    container.innerHTML = '';
    state.cleanerRules.filterList.forEach(tag => {
        const tagEl = document.createElement('div');
        tagEl.className = 'cleaner-tag';
        tagEl.textContent = tag;
        const removeEl = document.createElement('span');
        removeEl.className = 'cleaner-tag-remove';
        removeEl.innerHTML = '&times;';
        removeEl.style.marginLeft = '8px';
        removeEl.onclick = () => {
            state.cleanerRules.filterList = state.cleanerRules.filterList.filter(t => t !== tag);
            saveCleanerRules();
            renderCleanerTags();
        };
        tagEl.appendChild(removeEl);
        container.appendChild(tagEl);
    });
}
async function main() {
    document.getElementById('modalCustomLangUrl').value = localStorage.getItem('ocrCustomUrl') || '';
    document.getElementById('modalCustomLangCode').value = localStorage.getItem('ocrCustomCode') || '';
    initializeUploadZone();
    initializeCanvas();
    initializeKeyboard();
    initializeResizing();
    initializeTheme();
    initializeAppSettings();
    initializePresetModal();
    pushHistory(); // Save the initial empty state
    updateToolInfoPanel();

    const ocrOnlyCheckbox = document.getElementById('ocrOnlyEnabled');
    const ocrOnlyInput = document.getElementById('ocrOnlyTagInput');
    const ocrOnlyContainer = document.getElementById('ocrOnlyTagsContainer');
    ocrOnlyCheckbox.addEventListener('change', () => {
        const isEnabled = ocrOnlyCheckbox.checked;
        ocrOnlyInput.disabled = !isEnabled;
        ocrOnlyContainer.style.opacity = isEnabled ? '1' : '0.5';
        ocrOnlyContainer.style.pointerEvents = isEnabled ? 'auto' : 'none';
    });

    // Event listener for OCR Only input
    const ocrOnlyTagInput = document.getElementById('ocrOnlyTagInput');
    ocrOnlyTagInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            const newTag = ocrOnlyTagInput.value.trim();
            if (newTag && !state.cleanerRules.ocrOnlyList.includes(newTag)) {
                state.cleanerRules.ocrOnlyList.push(newTag);
                saveCleanerRules();
                renderOcrOnlyTags();
                ocrOnlyTagInput.value = '';
            }
        }
    });

    const cleanerTagInput = document.getElementById('cleanerTagInput');
    cleanerTagInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            const newTag = cleanerTagInput.value.trim();
            if (newTag && !state.cleanerRules.filterList.includes(newTag)) {
                state.cleanerRules.filterList.push(newTag);
                saveCleanerRules();
                renderCleanerTags();
                cleanerTagInput.value = '';
            }
        }
    });
    const removeNumbersCheckbox = document.getElementById('cleanerRemoveNumbers');
    const numberThresholdInput = document.getElementById('cleanerNumberThreshold');
    removeNumbersCheckbox.addEventListener('change', () => {
        numberThresholdInput.disabled = !removeNumbersCheckbox.checked;
    });
    // Replacement Rule handler
    const addReplacementRuleBtn = document.getElementById('addReplacementRuleBtn');
    const replacementFindInput = document.getElementById('replacementFind');
    const replacementReplaceInput = document.getElementById('replacementReplace');
    const addRuleHandler = () => {
        const findText = replacementFindInput.value.trim();
        const replaceText = replacementReplaceInput.value; // Allow empty replacement
        if (findText) {
            if (!state.cleanerRules.replacements) {
                state.cleanerRules.replacements = [];
            }
            state.cleanerRules.replacements.push({ find: findText, replace: replaceText });
            saveCleanerRules();
            renderReplacementRules();
            replacementFindInput.value = '';
            replacementReplaceInput.value = '';
            replacementFindInput.focus();
            showAlert('Replacement rule added.', 'success');
        }
        else {
            showAlert('Please provide a "Find" value.', 'warning');
        }
    };
    addReplacementRuleBtn.addEventListener('click', addRuleHandler);
    replacementFindInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            replacementReplaceInput.focus();
        }
    });
    replacementReplaceInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            addRuleHandler();
        }
    });
    
    await initializeTesseract();
    renderDocumentsList();
    showAlert('Ready! Drag a file or click to upload.', 'info');
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('data:text/javascript,// Cache strategy for OCR app').then(registration => {
            console.log('Service Worker registered');
        }).catch(error => {
            console.log('Service Worker registration failed');
        });
    }
}

// Grid Preset Functions
window.showSaveGridPresetModal = function() {
    const gridsOnPage = state.grids.filter(g => g.page === state.currentPage);
    if (gridsOnPage.length === 0) {
        showAlert('No grids on the current page to save a preset.', 'warning');
        return;
    }
    document.getElementById('saveGridPresetModal').classList.add('visible');
};

window.closeSaveGridPresetModal = function() {
    document.getElementById('saveGridPresetModal').classList.remove('visible');
};

window.saveGridPreset = function() {
    const presetNameInput = document.getElementById('gridPresetName');
    let presetName = presetNameInput.value.trim();
    if (!presetName) {
        presetName = `grid-preset-${new Date().toISOString().split('T')[0]}`;
    }
    
    const gridsOnPage = state.grids.filter(g => g.page === state.currentPage);
    const presetData = {
        grids: gridsOnPage.map(g => ({
             x: g.x,
             y: g.y,
             width: g.width,
             cellHeight: g.cellHeight,
             cells: g.cells,
        }))
    };

    downloadFile(JSON.stringify(presetData, null, 2), `${presetName}.json`, 'application/json');
    presetNameInput.value = '';
    closeSaveGridPresetModal();
};

window.importGridPreset = function() {
    document.getElementById('importGridPresetModal').classList.add('visible');
};

window.closeImportGridPresetModal = function() {
    document.getElementById('importGridPresetModal').classList.remove('visible');
}

function initializePresetModal() {
    const uploadZone = document.getElementById('presetUploadZone');
    const fileInput = document.getElementById('presetFileInput');

    uploadZone.addEventListener('click', () => fileInput.click());

    uploadZone.addEventListener('dragover', (e) => {
        e.preventDefault();
        uploadZone.classList.add('dragover');
    });

    uploadZone.addEventListener('dragleave', () => {
        uploadZone.classList.remove('dragover');
    });

    uploadZone.addEventListener('drop', (e) => {
        e.preventDefault();
        uploadZone.classList.remove('dragover');
        if (e.dataTransfer.files.length > 0) {
            handlePresetFile(e.dataTransfer.files[0]);
        }
    });

    fileInput.addEventListener('change', (e) => {
        if (e.target.files.length > 0) {
            handlePresetFile(e.target.files[0]);
        }
    });
}

function handlePresetFile(file) {
    if (!file) return;
    
    const reader = new FileReader();
    reader.onload = (e) => {
        try {
            const preset = JSON.parse(e.target.result);
            if (!preset.grids || !Array.isArray(preset.grids)) {
                showAlert('Invalid grid preset file format.', 'error');
                return;
            }
            
            const applyToAll = document.getElementById('applyPresetToAllPages').checked;
            let gridsAddedCount = 0;

            const addGridsToPage = (pageNum) => {
                preset.grids.forEach(gridData => {
                     if (gridData.x !== undefined && gridData.y !== undefined && gridData.width !== undefined && gridData.cellHeight !== undefined && gridData.cells !== undefined) {
                        const newGrid = {
                            ...gridData,
                            id: 'grid_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9),
                            page: pageNum,
                        };
                        state.grids.push(newGrid);
                        gridsAddedCount++;
                     }
                });
            }

            if (applyToAll) {
                if (!state.currentFile || !state.currentFile.totalPages) {
                    showAlert('Load a document before applying a preset to all pages.', 'warning');
                    return;
                }
                for (let i = 1; i <= state.currentFile.totalPages; i++) {
                    addGridsToPage(i);
                }
                showAlert(`Preset applied to all ${state.currentFile.totalPages} pages.`, 'success');

            } else {
                addGridsToPage(state.currentPage);
                showAlert('Grid preset loaded successfully onto current page.', 'success');
            }

            if (gridsAddedCount > 0) {
                pushHistory();
                renderDocument();
            }
            
            closeImportGridPresetModal();

        } catch (error) {
            showAlert('Could not read preset file. Make sure it is a valid JSON file.', 'error');
            console.error("Error parsing grid preset:", error);
        } finally {
            document.getElementById('presetFileInput').value = null;
        }
    };
    reader.onerror = () => showAlert('Error reading file.', 'error');
    reader.readAsText(file);
}


main();

/* === AD PLACEHOLDER & LOGIC === */

/* === ADS PLACEHOLDER & logic ===
   - This code creates:
     * a responsive banner container (#adBannerContainer) fixed to the bottom.
     * an interstitial modal (#adInterstitialModal) shown every N OCRs (default 10)
       and not dismissible for 3 seconds.
   - IMPORTANT: Replace the innerHTML of the ad containers with your AdSense code.
     See README_VERCEL_ADS.md for exact steps.
*/

/* Configuration */
window.__adsConfig = {
    ocrsPerInterstitial: 10,
    interstitialMinSeconds: 3,
    bannerVisible: true,
    storageKey: "anita_ocr_ad_counter"
};

/* Create banner container if not present */
(function createAdContainers(){
    // Banner
    if (!document.getElementById('adBannerContainer')) {
        var banner = document.createElement('div');
        banner.id = 'adBannerContainer';
        banner.className = 'hidden';
        // Placeholder content: developer must paste AdSense ins tag here.
        banner.innerHTML = '<div id="adBannerInner" style="width:100%;max-width:970px;text-align:center;padding:8px;"><!-- PASTE ADSENSE BANNER CODE HERE: create responsive ad unit and put the <ins class=\"adsbygoogle\" ...> here --></div>';
        document.body.appendChild(banner);
    }
    // Interstitial
    if (!document.getElementById('adInterstitialModal')) {
        var modal = document.createElement('div');
        modal.id = 'adInterstitialModal';
        modal.innerHTML = '\
            <div id="adInterstitialContent">\
                <div id="adInterstitialInner" style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;">\
                    <!-- PASTE ADSENSE/AD CODE HERE FOR INTERSTITIAL -->\
                    <div style="text-align:center;color:#6b7280;"><strong>Ad Placeholder</strong><div style=\"margin-top:12px;\">Your ad will appear here</div></div>\
                </div>\
                <div id="adInterstitialTimer">Cargando anuncio...</div>\
                <button id="adInterstitialClose" class="hidden" aria-label="Close ad">Cerrar</button>\
            </div>';
        document.body.appendChild(modal);
    }
})();

/* Helper to show/hide banner */
function showBanner() {
    var b = document.getElementById('adBannerContainer');
    if (!b) return;
    b.classList.remove('hidden');
}
function hideBanner() {
    var b = document.getElementById('adBannerContainer');
    if (!b) return;
    b.classList.add('hidden');
}

/* Interstitial logic */
function showInterstitialIfNeeded() {
    try {
        var key = window.__adsConfig.storageKey;
        var count = parseInt(localStorage.getItem(key) || '0', 10);
        if (count > 0 && count % window.__adsConfig.ocrsPerInterstitial === 0) {
            showInterstitial();
        }
    } catch(e) { console.warn("Ad interstitial check failed", e); }
}

function showInterstitial() {
    var modal = document.getElementById('adInterstitialModal');
    var closeBtn = document.getElementById('adInterstitialClose');
    var timerEl = document.getElementById('adInterstitialTimer');
    if (!modal) return;
    modal.classList.add('visible');
    // hide close for a minimum period
    closeBtn.classList.add('hidden');
    var seconds = window.__adsConfig.interstitialMinSeconds || 3;
    var remaining = seconds;
    timerEl.textContent = 'Puedes cerrar en ' + remaining + 's';
    var iv = setInterval(function(){
        remaining -= 1;
        if (remaining > 0) {
            timerEl.textContent = 'Puedes cerrar en ' + remaining + 's';
        } else {
            timerEl.textContent = '';
            clearInterval(iv);
            closeBtn.classList.remove('hidden');
        }
    }, 1000);
    closeBtn.onclick = function(){
        modal.classList.remove('visible');
    }
}

/* Public function to notify an OCR was processed.
   This increments a counter (persisted in localStorage) and triggers interstitial when needed.
*/
window.notifyOcrProcessed = function() {
    try {
        var key = window.__adsConfig.storageKey;
        var count = parseInt(localStorage.getItem(key) || '0', 10);
        count += 1;
        localStorage.setItem(key, String(count));
        // Also update a visible badge if desired (not implemented)
        showInterstitialIfNeeded();
    } catch(e) { console.warn("notifyOcrProcessed error", e); }
};

/* Auto-detect OCR results being added:
   - Observe the #resultsContainer for child additions of elements with class .result-block
   - When new result-block is added, call notifyOcrProcessed()
*/
(function attachMutationObserver(){
    var container = document.getElementById('resultsContainer');
    if (!container) {
        // retry once DOM is loaded
        document.addEventListener('DOMContentLoaded', attachMutationObserver);
        return;
    }
    var mo = new MutationObserver(function(mutations){
        mutations.forEach(function(m){
            m.addedNodes.forEach(function(node){
                if (node.nodeType === 1) {
                    if (node.classList && node.classList.contains('result-block')) {
                        // A result was added
                        window.notifyOcrProcessed();
                    } else {
                        // sometimes result blocks may be nested; scan for descendant result-blocks
                        if (node.querySelector && node.querySelector('.result-block')) {
                            window.notifyOcrProcessed();
                        }
                    }
                }
            });
        });
    });
    mo.observe(container, { childList: true, subtree: true });
})();

/* Expose functions to developer console for testing */
window.__adsDev = {
    showBanner: showBanner,
    hideBanner: hideBanner,
    showInterstitial: showInterstitial,
    notifyOcrProcessed: window.notifyOcrProcessed
};
