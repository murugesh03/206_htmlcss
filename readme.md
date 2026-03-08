                          JavaScript Runtime Environment

┌──────────────────────────────────────────────────────────────────────────┐
│ │
│ JavaScript Engine │
│ │
│ ┌─────────────────────────────┐ │
│ │ Call Stack │ │
│ │ (Executes JS functions) │ │
│ └───────────────▲──────────────┘ │
│ │ │
│ │ │
│ Event Loop │
│ │ │
│ ▼ │
│ ┌───────────────────────────────┐ │
│ │ Microtask Queue │ │
│ │ (High Priority Tasks) │ │
│ │ │ │
│ │ Promise.then() │ │
│ │ Promise.catch() │ │
│ │ queueMicrotask() │ │
│ │ MutationObserver │ │
│ └──────────────▲────────────────┘ │
│ │ │
│ │ │
│ ┌───────────────────────────────┐ │
│ │ Callback Queue │ │
│ │ (Task Queue / Macrotask) │ │
│ │ │ │
│ │ setTimeout │ │
│ │ setInterval │ │
│ │ DOM Events │ │
│ │ I/O callbacks │ │
│ │ MessageChannel │ │
│ └──────────────▲────────────────┘ │
│ │ │
│ │ │
│ ┌─────────────────────────┐ │
│ │ Web APIs │ │
│ │ (Browser Environment) │ │
│ │ │ │
│ │ setTimeout │ │
│ │ setInterval │ │
│ │ fetch / AJAX │ │
│ │ DOM Event Handlers │ │
│ │ XMLHttpRequest │ │
│ │ Geolocation API │ │
│ │ File API │ │
│ └─────────────────────────┘ │
│ │
└──────────────────────────────────────────────────────────────────────────┘
