 (cd "$(git rev-parse --show-toplevel)" && git apply --3way <<'EOF' 
diff --git a//dev/null b/src/index.js
index 0000000000000000000000000000000000000000..d72b7c9d9dc2d21e00eaa107ab68f66227027431 100644
--- a//dev/null
+++ b/src/index.js
@@ -0,0 +1,11 @@
+import React from 'react';
+import ReactDOM from 'react-dom/client';
+import App from './App';
+import './index.css';
+
+const root = ReactDOM.createRoot(document.getElementById('root'));
+root.render(
+  <React.StrictMode>
+    <App />
+  </React.StrictMode>
+);
 
EOF
)
