// Pride PFP Maker - Core Application Logic

// Helper for drawing horizontal stripes
function drawHorizontalStripes(ctx, colors, w, h) {
    const stripeHeight = h / colors.length;
    colors.forEach((color, idx) => {
        ctx.fillStyle = color;
        ctx.fillRect(0, idx * stripeHeight, w, stripeHeight);
    });
}

// Pride Flag Definitions
const FLAGS = [
    {
        id: 'pride',
        name: 'Pride (Rainbow)',
        draw: (ctx, w, h) => {
            drawHorizontalStripes(ctx, ['#FF0018', '#FFA52C', '#FFFF41', '#008018', '#0000F9', '#86007D'], w, h);
        }
    },
    {
        id: 'progress',
        name: 'Progress Pride',
        draw: (ctx, w, h) => {
            // Rainbow background
            drawHorizontalStripes(ctx, ['#E50000', '#FF8D00', '#FFEE00', '#028121', '#004CFF', '#760089'], w, h);

            // Chevron stripes (drawn from rightmost/largest to leftmost/smallest)
            const colors = ['#000000', '#613915', '#5BCEFA', '#F5A9B8', '#FFFFFF'];
            const stripeWidth = w * 0.085;

            colors.forEach((color, idx) => {
                ctx.fillStyle = color;
                ctx.beginPath();
                const tipX = (colors.length - idx) * stripeWidth;
                ctx.moveTo(0, 0);
                ctx.lineTo(tipX, h / 2);
                ctx.lineTo(0, h);
                ctx.closePath();
                ctx.fill();
            });
        }
    },
    {
        id: 'trans',
        name: 'Transgender',
        draw: (ctx, w, h) => {
            drawHorizontalStripes(ctx, ['#5BCEFA', '#F5A9B8', '#FFFFFF', '#F5A9B8', '#5BCEFA'], w, h);
        }
    },
    {
        id: 'lesbian',
        name: 'Lesbian',
        draw: (ctx, w, h) => {
            drawHorizontalStripes(ctx, ['#D52D00', '#EF7627', '#FF9A56', '#FFFFFF', '#D162A4', '#B51365', '#A30262'], w, h);
        }
    },
    {
        id: 'gay',
        name: 'Gay (MLM)',
        draw: (ctx, w, h) => {
            drawHorizontalStripes(ctx, ['#078970', '#26B299', '#98E8C1', '#FFFFFF', '#7BADE2', '#3D1A78', '#3C1053'], w, h);
        }
    },
    {
        id: 'bisexual',
        name: 'Bisexual',
        draw: (ctx, w, h) => {
            ctx.fillStyle = '#D60270';
            ctx.fillRect(0, 0, w, h * 0.4);
            ctx.fillStyle = '#9B4F96';
            ctx.fillRect(0, h * 0.4, w, h * 0.2);
            ctx.fillStyle = '#0038A8';
            ctx.fillRect(0, h * 0.6, w, h * 0.4);
        }
    },
    {
        id: 'pansexual',
        name: 'Pansexual',
        draw: (ctx, w, h) => {
            drawHorizontalStripes(ctx, ['#FF218C', '#FFD800', '#21B1FF'], w, h);
        }
    },
    {
        id: 'nonbinary',
        name: 'Non-Binary',
        draw: (ctx, w, h) => {
            drawHorizontalStripes(ctx, ['#FCF434', '#FFFFFF', '#9C59D1', '#2C2C2C'], w, h);
        }
    },
    {
        id: 'asexual',
        name: 'Asexual',
        draw: (ctx, w, h) => {
            drawHorizontalStripes(ctx, ['#000000', '#A3A3A3', '#FFFFFF', '#800080'], w, h);
        }
    },
    {
        id: 'genderfluid',
        name: 'Genderfluid',
        draw: (ctx, w, h) => {
            drawHorizontalStripes(ctx, ['#FF75A2', '#FFFFFF', '#BE18D6', '#000000', '#333EBD'], w, h);
        }
    },
    {
        id: 'genderqueer',
        name: 'Genderqueer',
        draw: (ctx, w, h) => {
            drawHorizontalStripes(ctx, ['#B57EDC', '#FFFFFF', '#4A8123'], w, h);
        }
    },
    {
        id: 'agender',
        name: 'Agender',
        draw: (ctx, w, h) => {
            drawHorizontalStripes(ctx, ['#000000', '#B9B9B9', '#FFFFFF', '#B8F483', '#FFFFFF', '#B9B9B9', '#000000'], w, h);
        }
    },
    {
        id: 'intersex',
        name: 'Intersex',
        draw: (ctx, w, h) => {
            ctx.fillStyle = '#FFD800';
            ctx.fillRect(0, 0, w, h);
            ctx.strokeStyle = '#790292';
            ctx.lineWidth = Math.min(w, h) * 0.085;
            ctx.beginPath();
            ctx.arc(w / 2, h / 2, Math.min(w, h) * 0.22, 0, Math.PI * 2);
            ctx.stroke();
        }
    },
    {
        id: 'aromantic',
        name: 'Aromantic',
        draw: (ctx, w, h) => {
            drawHorizontalStripes(ctx, ['#3DA542', '#A7D379', '#FFFFFF', '#A9A9A9', '#000000'], w, h);
        }
    },
    {
        id: 'demisexual',
        name: 'Demisexual',
        draw: (ctx, w, h) => {
            ctx.fillStyle = '#FFFFFF';
            ctx.fillRect(0, 0, w, h * 0.42);
            ctx.fillStyle = '#800080';
            ctx.fillRect(0, h * 0.42, w, h * 0.16);
            ctx.fillStyle = '#A3A3A3';
            ctx.fillRect(0, h * 0.58, w, h * 0.42);
            // Black chevron on left
            ctx.fillStyle = '#000000';
            ctx.beginPath();
            ctx.moveTo(0, 0);
            ctx.lineTo(w * 0.4, h / 2);
            ctx.lineTo(0, h);
            ctx.closePath();
            ctx.fill();
        }
    },
    {
        id: 'polysexual',
        name: 'Polysexual',
        draw: (ctx, w, h) => {
            drawHorizontalStripes(ctx, ['#F20089', '#028A0F', '#00BFFF'], w, h);
        }
    },
    {
        id: 'ally',
        name: 'Straight Ally',
        draw: (ctx, w, h) => {
            const colors = ['#000000', '#FFFFFF', '#000000', '#FFFFFF', '#000000', '#FFFFFF', '#000000', '#FFFFFF', '#000000', '#FFFFFF'];
            drawHorizontalStripes(ctx, colors, w, h);
            // Rainbow chevron (A-shape)
            const rainbow = ['#FF0018', '#FFA52C', '#FFFF41', '#008018', '#0000F9', '#86007D'];
            rainbow.forEach((color, idx) => {
                ctx.fillStyle = color;
                ctx.beginPath();
                const tipY = h * 0.15 + idx * (h * 0.06);
                const outerTipY = h * 0.15 + (idx + 1) * (h * 0.06);
                
                ctx.moveTo(w / 2, tipY);
                ctx.lineTo(w * 0.85 - idx * (w * 0.05), h * 0.9);
                ctx.lineTo(w * 0.85 - (idx + 1) * (w * 0.05), h * 0.9);
                ctx.lineTo(w / 2, outerTipY);
                ctx.lineTo(w * 0.15 + (idx + 1) * (w * 0.05), h * 0.9);
                ctx.lineTo(w * 0.15 + idx * (w * 0.05), h * 0.9);
                ctx.closePath();
                ctx.fill();
            });
        }
    }
];

// App State
const state = {
    image: null,           // Loaded HTML Image object
    zoom: 100,             // Percent (10 - 400)
    rotation: 0,           // Degrees (0 - 360)
    offsetX: 0,            // Horizontal drag offset
    offsetY: 0,            // Vertical drag offset
    selectedFlagId: 'pride',
    selectedStyle: 'ring', // ring, double-ring, overlay, gradient, banner
    cropShape: 'circle',   // circle, square
    ringThickness: 10,     // Percent (2 - 30)
    opacity: 50,           // Percent (10 - 100)
    blendMode: 'overlay',  // Normal, Overlay, Soft Light, Multiply, Screen
    dragging: false,       // Drag tracking
    dragStartX: 0,
    dragStartY: 0
};

// UI Elements
const el = {
    canvas: document.getElementById('pfp-canvas'),
    ctx: document.getElementById('pfp-canvas').getContext('2d'),
    uploadInput: document.getElementById('image-upload'),
    dropZone: document.getElementById('drop-zone'),
    zoomSlider: document.getElementById('zoom-slider'),
    zoomVal: document.getElementById('zoom-val'),
    rotateSlider: document.getElementById('rotate-slider'),
    rotateVal: document.getElementById('rotate-val'),
    flagsGrid: document.getElementById('flags-grid'),
    flagSearch: document.getElementById('flag-search'),
    styleSelector: document.getElementById('style-selector'),
    thicknessSlider: document.getElementById('thickness-slider'),
    thicknessVal: document.getElementById('thickness-val'),
    opacitySlider: document.getElementById('opacity-slider'),
    opacityVal: document.getElementById('opacity-val'),
    blendSelect: document.getElementById('blend-mode-select'),
    exportSelect: document.getElementById('export-size'),
    shapeButtons: document.querySelectorAll('.btn-toggle[data-shape]'),
    downloadBtn: document.getElementById('download-btn'),
    resetBtn: document.getElementById('reset-btn'),
    canvasHint: document.getElementById('canvas-hint'),
    
    // Panel groups
    ringThicknessGroup: document.getElementById('ring-thickness-group'),
    opacityGroup: document.getElementById('opacity-group'),
    blendModeGroup: document.getElementById('blend-mode-group')
};

// Render the Flag Selector Grid
function renderFlags(filterText = '') {
    el.flagsGrid.innerHTML = '';
    const filteredFlags = FLAGS.filter(flag => 
        flag.name.toLowerCase().includes(filterText.toLowerCase())
    );
    
    filteredFlags.forEach(flag => {
        const flagItem = document.createElement('div');
        flagItem.className = `flag-item ${flag.id === state.selectedFlagId ? 'active' : ''}`;
        flagItem.dataset.id = flag.id;
        
        // Generate circular preview dynamically using helper canvas
        const tempCanvas = document.createElement('canvas');
        tempCanvas.width = 72;
        tempCanvas.height = 72;
        const tempCtx = tempCanvas.getContext('2d');
        flag.draw(tempCtx, 72, 72);
        
        const previewUrl = tempCanvas.toDataURL();
        
        flagItem.innerHTML = `
            <img class="flag-preview" src="${previewUrl}" alt="${flag.name} preview">
            <span class="flag-name">${flag.name}</span>
        `;
        
        flagItem.addEventListener('click', () => {
            document.querySelectorAll('.flag-item').forEach(item => item.classList.remove('active'));
            flagItem.classList.add('active');
            state.selectedFlagId = flag.id;
            draw();
        });
        
        el.flagsGrid.appendChild(flagItem);
    });
}

// Generate the Default Silhouette Avatar
function drawDefaultAvatar(ctx, w, h) {
    // Elegant radial background gradient
    const grad = ctx.createRadialGradient(w/2, h/2, w*0.1, w/2, h/2, w*0.6);
    grad.addColorStop(0, '#2e2e45');
    grad.addColorStop(1, '#11111a');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, w, h);

    // Subtle outline circle
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.05)';
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.arc(w / 2, h / 2, w * 0.4, 0, Math.PI * 2);
    ctx.stroke();

    // Draw stylized head
    ctx.fillStyle = 'rgba(255, 255, 255, 0.12)';
    ctx.beginPath();
    ctx.arc(w / 2, h * 0.38, w * 0.15, 0, Math.PI * 2);
    ctx.fill();

    // Draw stylized shoulders
    ctx.beginPath();
    ctx.arc(w / 2, h * 0.95, w * 0.33, Math.PI, 0, false);
    ctx.fill();
    
    // Nice helper icon text overlay
    ctx.fillStyle = 'rgba(255, 255, 255, 0.4)';
    ctx.font = `600 ${w * 0.045}px 'Inter', sans-serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText("Click here to upload photo", w / 2, h * 0.65);
}

// Redraw everything onto the main canvas
function draw() {
    const canvas = el.canvas;
    const ctx = el.ctx;
    
    // Set internal resolution of canvas based on user export setting
    const size = parseInt(el.exportSelect.value, 10);
    if (canvas.width !== size) {
        canvas.width = size;
        canvas.height = size;
    }
    
    const w = canvas.width;
    const h = canvas.height;
    
    // Clear canvas
    ctx.clearRect(0, 0, w, h);
    
    // 1. Draw PFP Crop Mask (for visual preview clipping on the download output)
    ctx.save();
    if (state.cropShape === 'circle') {
        ctx.beginPath();
        ctx.arc(w / 2, h / 2, w / 2, 0, Math.PI * 2);
        ctx.clip();
    }
    
    const flag = FLAGS.find(f => f.id === state.selectedFlagId) || FLAGS[0];
    
    // Helper: draw user photo or default placeholder
    const drawUserImage = (targetCtx, clipRadius) => {
        targetCtx.save();
        if (state.image) {
            // Apply scale, rotation, and offsets
            const cx = w / 2 + state.offsetX;
            const cy = h / 2 + state.offsetY;
            targetCtx.translate(cx, cy);
            targetCtx.rotate(state.rotation * Math.PI / 180);
            
            // Calculate scale factor: fit image bounds
            const scale = (state.zoom / 100) * (w / Math.min(state.image.width, state.image.height));
            targetCtx.scale(scale, scale);
            
            targetCtx.drawImage(
                state.image, 
                -state.image.width / 2, 
                -state.image.height / 2, 
                state.image.width, 
                state.image.height
            );
        } else {
            drawDefaultAvatar(targetCtx, w, h);
        }
        targetCtx.restore();
    };

    // 2. Draw depending on the selected style
    if (state.selectedStyle === 'ring') {
        const thickness = w * (state.ringThickness / 100);
        
        // Draw the background flag
        flag.draw(ctx, w, h);
        
        // Clip to inner circle/square and draw user image
        ctx.save();
        ctx.beginPath();
        if (state.cropShape === 'circle') {
            ctx.arc(w / 2, h / 2, w / 2 - thickness, 0, Math.PI * 2);
        } else {
            ctx.rect(thickness, thickness, w - 2 * thickness, h - 2 * thickness);
        }
        ctx.clip();
        
        // Clear background inside ring
        ctx.clearRect(0, 0, w, h);
        drawUserImage(ctx);
        ctx.restore();
        
    } else if (state.selectedStyle === 'double-ring') {
        const thickness = w * (state.ringThickness / 100);
        const gap = thickness * 0.25;
        const innerRingWidth = thickness * 0.20;
        
        // Draw outer flag ring
        flag.draw(ctx, w, h);
        
        // Clear the gap
        ctx.save();
        ctx.beginPath();
        if (state.cropShape === 'circle') {
            ctx.arc(w / 2, h / 2, w / 2 - thickness + gap, 0, Math.PI * 2);
        } else {
            ctx.rect(thickness - gap, thickness - gap, w - 2 * (thickness - gap), h - 2 * (thickness - gap));
        }
        ctx.clip();
        ctx.clearRect(0, 0, w, h);
        ctx.restore();
        
        // Draw inner flag ring
        ctx.save();
        ctx.beginPath();
        if (state.cropShape === 'circle') {
            ctx.arc(w / 2, h / 2, w / 2 - thickness + gap, 0, Math.PI * 2);
        } else {
            ctx.rect(thickness - gap, thickness - gap, w - 2 * (thickness - gap), h - 2 * (thickness - gap));
        }
        ctx.clip();
        flag.draw(ctx, w, h);
        ctx.restore();
        
        // Draw user image inside the innermost bounds
        ctx.save();
        ctx.beginPath();
        const innerBound = thickness - gap - innerRingWidth;
        if (state.cropShape === 'circle') {
            ctx.arc(w / 2, h / 2, w / 2 - innerBound, 0, Math.PI * 2);
        } else {
            ctx.rect(innerBound, innerBound, w - 2 * innerBound, h - 2 * innerBound);
        }
        ctx.clip();
        ctx.clearRect(0, 0, w, h);
        drawUserImage(ctx);
        ctx.restore();
        
    } else if (state.selectedStyle === 'overlay') {
        // Draw user image first
        drawUserImage(ctx);
        
        // Save state, apply transparency & blend mode, draw flag
        ctx.save();
        ctx.globalAlpha = state.opacity / 100;
        ctx.globalCompositeOperation = state.blendMode;
        flag.draw(ctx, w, h);
        ctx.restore();
        
    } else if (state.selectedStyle === 'gradient') {
        // Draw user image first
        drawUserImage(ctx);
        
        // Draw flag onto a temporary canvas
        const tempCanvas = document.createElement('canvas');
        tempCanvas.width = w;
        tempCanvas.height = h;
        const tempCtx = tempCanvas.getContext('2d');
        flag.draw(tempCtx, w, h);
        
        // Create radial gradient mask: transparent in middle, solid white at borders
        const maskCanvas = document.createElement('canvas');
        maskCanvas.width = w;
        maskCanvas.height = h;
        const maskCtx = maskCanvas.getContext('2d');
        const grad = maskCtx.createRadialGradient(w/2, h/2, w * 0.15, w/2, h/2, w * 0.5);
        grad.addColorStop(0, 'rgba(255, 255, 255, 0)');
        grad.addColorStop(1, 'rgba(255, 255, 255, 1)');
        maskCtx.fillStyle = grad;
        maskCtx.fillRect(0, 0, w, h);
        
        // Apply mask to flag temp canvas
        tempCtx.save();
        tempCtx.globalCompositeOperation = 'destination-in';
        tempCtx.drawImage(maskCanvas, 0, 0);
        tempCtx.restore();
        
        // Draw masked flag over user image
        ctx.save();
        ctx.globalAlpha = state.opacity / 100;
        ctx.globalCompositeOperation = state.blendMode;
        ctx.drawImage(tempCanvas, 0, 0);
        ctx.restore();
        
    } else if (state.selectedStyle === 'banner') {
        // Draw user image first
        drawUserImage(ctx);
        
        const offset = w * 0.32;
        const thickness = w * 0.16;
        
        ctx.save();
        // Clip to diagonal banner sash trapezoid in bottom-right corner
        ctx.beginPath();
        ctx.moveTo(w - offset, h);
        ctx.lineTo(w, h - offset);
        ctx.lineTo(w, h - offset - thickness);
        ctx.lineTo(w - offset - thickness, h);
        ctx.closePath();
        ctx.clip();
        
        // Translate to ribbon center and rotate by -45 degrees
        ctx.translate(w, h);
        ctx.rotate(-Math.PI / 4);
        
        // Draw flag as a horizontal bar inside the rotated ribbon space
        // Perpendicular offset of ribbon center is (offset + thickness/2) / sqrt(2)
        const d = (offset + thickness / 2) * Math.SQRT1_2;
        
        // Render flag into temporary horizontal canvas and draw
        const tempCanvas = document.createElement('canvas');
        tempCanvas.width = w * 2;
        tempCanvas.height = thickness;
        const tempCtx = tempCanvas.getContext('2d');
        flag.draw(tempCtx, w * 2, thickness);
        
        ctx.drawImage(tempCanvas, -w, -d - thickness/2, w * 2, thickness);
        ctx.restore();
    }
    
    ctx.restore(); // Restore from main crop mask clip
}

// Handle image loading
function handleImage(file) {
    if (!file || !file.type.match('image.*')) return;
    
    const reader = new FileReader();
    reader.onload = (e) => {
        const img = new Image();
        img.onload = () => {
            state.image = img;
            state.zoom = 100;
            state.rotation = 0;
            state.offsetX = 0;
            state.offsetY = 0;
            
            // Sync values to UI
            el.zoomSlider.value = 100;
            el.zoomVal.textContent = '100%';
            el.rotateSlider.value = 0;
            el.rotateVal.textContent = '0°';
            el.canvasHint.classList.remove('hidden');
            
            draw();
        };
        img.src = e.target.result;
    };
    reader.readAsDataURL(file);
}

// Setup Event Listeners
function setupEvents() {
    // 1. File Uploads
    el.uploadInput.addEventListener('change', (e) => {
        handleImage(e.target.files[0]);
    });
    
    el.dropZone.addEventListener('dragover', (e) => {
        e.preventDefault();
        el.dropZone.style.borderColor = 'var(--accent)';
    });
    
    el.dropZone.addEventListener('dragleave', () => {
        el.dropZone.style.borderColor = 'rgba(255, 255, 255, 0.15)';
    });
    
    el.dropZone.addEventListener('drop', (e) => {
        e.preventDefault();
        el.dropZone.style.borderColor = 'rgba(255, 255, 255, 0.15)';
        if (e.dataTransfer.files.length > 0) {
            handleImage(e.dataTransfer.files[0]);
        }
    });

    // 2. Adjustments Sliders
    el.zoomSlider.addEventListener('input', (e) => {
        state.zoom = parseInt(e.target.value, 10);
        el.zoomVal.textContent = `${state.zoom}%`;
        draw();
    });
    
    el.rotateSlider.addEventListener('input', (e) => {
        state.rotation = parseInt(e.target.value, 10);
        el.rotateVal.textContent = `${state.rotation}°`;
        draw();
    });

    // 3. Shape selection
    el.shapeButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            el.shapeButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            state.cropShape = btn.dataset.shape;
            
            // Toggle css class on canvas for visual feedback
            if (state.cropShape === 'circle') {
                el.canvas.className = 'circle-crop';
            } else {
                el.canvas.className = '';
            }
            draw();
        });
    });

    // 4. Export resolution change
    el.exportSelect.addEventListener('change', draw);

    // 5. Flag Search
    el.flagSearch.addEventListener('input', (e) => {
        renderFlags(e.target.value);
    });

    // 6. Style Selector
    const styleButtons = document.querySelectorAll('.btn-style');
    styleButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            styleButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            state.selectedStyle = btn.dataset.style;
            
            // Show/hide style adjust panels dynamically
            if (state.selectedStyle === 'ring' || state.selectedStyle === 'double-ring') {
                el.ringThicknessGroup.classList.remove('hidden');
                el.opacityGroup.classList.add('hidden');
                el.blendModeGroup.classList.add('hidden');
            } else if (state.selectedStyle === 'overlay' || state.selectedStyle === 'gradient') {
                el.ringThicknessGroup.classList.add('hidden');
                el.opacityGroup.classList.remove('hidden');
                el.blendModeGroup.classList.remove('hidden');
            } else if (state.selectedStyle === 'banner') {
                el.ringThicknessGroup.classList.add('hidden');
                el.opacityGroup.classList.add('hidden');
                el.blendModeGroup.classList.add('hidden');
            }
            draw();
        });
    });

    // Style sliders
    el.thicknessSlider.addEventListener('input', (e) => {
        state.ringThickness = parseInt(e.target.value, 10);
        el.thicknessVal.textContent = `${state.ringThickness}%`;
        draw();
    });
    
    el.opacitySlider.addEventListener('input', (e) => {
        state.opacity = parseInt(e.target.value, 10);
        el.opacityVal.textContent = `${state.opacity}%`;
        draw();
    });
    
    el.blendSelect.addEventListener('change', (e) => {
        state.blendMode = e.target.value;
        draw();
    });

    // 7. Canvas Drag to Pan
    const getPointerPos = (e) => {
        if (e.touches && e.touches.length > 0) {
            return { x: e.touches[0].clientX, y: e.touches[0].clientY };
        }
        return { x: e.clientX, y: e.clientY };
    };

    const startDrag = (e) => {
        if (!state.image) return;
        state.dragging = true;
        const pos = getPointerPos(e);
        state.dragStartX = pos.x - state.offsetX;
        state.dragStartY = pos.y - state.offsetY;
        e.preventDefault();
    };

    const drag = (e) => {
        if (!state.dragging || !state.image) return;
        const pos = getPointerPos(e);
        state.offsetX = pos.x - state.dragStartX;
        state.offsetY = pos.y - state.dragStartY;
        draw();
    };

    const stopDrag = () => {
        state.dragging = false;
    };

    // Mouse listeners
    el.canvas.addEventListener('mousedown', startDrag);
    window.addEventListener('mousemove', drag);
    window.addEventListener('mouseup', stopDrag);

    // Touch listeners (Mobile support)
    el.canvas.addEventListener('touchstart', startDrag, { passive: false });
    window.addEventListener('touchmove', drag, { passive: false });
    window.addEventListener('touchend', stopDrag);

    // Scroll to Zoom on Canvas
    el.canvas.addEventListener('wheel', (e) => {
        if (!state.image) return;
        e.preventDefault();
        
        // Zoom speed factor
        const zoomDelta = e.deltaY < 0 ? 5 : -5;
        state.zoom = Math.max(10, Math.min(400, state.zoom + zoomDelta));
        
        // Sync to slider
        el.zoomSlider.value = state.zoom;
        el.zoomVal.textContent = `${state.zoom}%`;
        draw();
    }, { passive: false });

    // 8. Download Button
    el.downloadBtn.addEventListener('click', () => {
        const link = document.createElement('a');
        link.download = `pride-pfp-${state.selectedFlagId}-${state.selectedStyle}.png`;
        link.href = el.canvas.toDataURL('image/png');
        link.click();
    });

    // 9. Reset Button
    el.resetBtn.addEventListener('click', () => {
        state.image = null;
        state.zoom = 100;
        state.rotation = 0;
        state.offsetX = 0;
        state.offsetY = 0;
        
        el.zoomSlider.value = 100;
        el.zoomVal.textContent = '100%';
        el.rotateSlider.value = 0;
        el.rotateVal.textContent = '0°';
        el.canvasHint.classList.add('hidden');
        
        draw();
    });
    
    // Click on canvas to upload when no image is loaded
    el.canvas.addEventListener('click', () => {
        if (!state.image) {
            el.uploadInput.click();
        }
    });
}

// Initial Launch
function init() {
    // Apply styling properties
    el.canvas.className = 'circle-crop';
    
    // Render selectors
    renderFlags();
    setupEvents();
    
    // Initial draw (shows default silhouette avatar)
    draw();
}

window.addEventListener('DOMContentLoaded', init);
