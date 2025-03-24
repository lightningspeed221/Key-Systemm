// Simulated "database" in memory (keys are ephemeral unless saved to keys.json manually)
let keyDatabase = {};

// Load existing keys from keys.json (if available)
fetch('keys.json')
    .then(response => response.json())
    .then(data => {
        keyDatabase = data;
    })
    .catch(error => console.log("No keys.json found or error:", error));

// Step 1: Start the task
function startTask() {
    const taskUrl = "change";
    window.location.href = taskUrl;
}

// Step 2: Generate and display key
function generateAndDisplayKey() {
    const newKey = Math.random().toString(36).substring(2, 10).toUpperCase(); // e.g., "X7K9P2M4"
    keyDatabase[newKey] = { key_code: newKey, is_used: false, created_at: Date.now() };
    
    document.getElementById("key-display").textContent = newKey;
    console.log("Updated database:", keyDatabase); // For debugging
}

// Note: keys.json must be manually updated since GitHub Pages is static