// Accordion Dropdown logic
function toggleDropdown(id) {
    var targetOutput = document.getElementById(id);
    var targetCmd = document.getElementById('cmd-' + id);

    if (targetOutput) {
        var isOpen = targetOutput.classList.contains('show');

        // Close all other outputs
        var allOutputs = document.querySelectorAll('.output');
        var allCmds = document.querySelectorAll('.cmd');

        allOutputs.forEach(function(out) {
            out.classList.remove('show');
        });
        allCmds.forEach(function(cmd) {
            cmd.classList.remove('open');
        });

        // Open clicked section if it wasn't open
        if (!isOpen) {
            targetOutput.classList.add('show');
            if (targetCmd) {
                targetCmd.classList.add('open');
            }
        }
    }
}

// Auto-open About section on initial page load
window.onload = function() {
    setTimeout(function() {
        toggleDropdown('about');
    }, 300);
};
