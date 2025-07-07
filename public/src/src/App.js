 (cd "$(git rev-parse --show-toplevel)" && git apply --3way <<'EOF' 
diff --git a//dev/null b/src/App.js
index 0000000000000000000000000000000000000000..c4bd88c6941a8a0ab2cce036302d15c53281ff4e 100644
--- a//dev/null
+++ b/src/App.js
@@ -0,0 +1,13 @@
+import React from 'react';
+import './App.css';
+
+function App() {
+  return (
+    <div className="App">
+      <h1>FuturePath Parent Dashboard</h1>
+      <p>Welcome to the parent dashboard!</p>
+    </div>
+  );
+}
+
+export default App;
 
EOF
)
