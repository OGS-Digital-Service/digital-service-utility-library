


(function($) {
    $.fn.dataTable.Api.register('applyAccessibility()', function() {
        return this.iterator('table', function(settings) {
             setTimeout(() => {
            const api = new $.fn.dataTable.Api(settings);
            const tableBody = api.table().body();
            
            // Accessing elements by class name as requested
            const controls = tableBody.getElementsByClassName('dtr-control');

            for (let i = 0; i < controls.length; i++) {
                const element = controls[i];
                const row = element.closest('tr');
                
                // 1. Initial Attributes (Role and Aria)
                if (!element.hasAttribute('role')) {
                    const title = row ? row.cells[0].innerText.trim() : "row";
                    element.setAttribute('role', 'button');
                    element.setAttribute('aria-label', `View details for ${title}`);
                    element.setAttribute('aria-expanded', 'false');
                }

                // 2. Add Keyboard and Click listeners
                if (!element.dataset.accBound) {
                    const updateAria = () => {
                        
                        setTimeout(() => {
                            const isExpanded = row.classList.contains('dtr-expanded');
                            element.setAttribute('aria-expanded', isExpanded.toString());
                        }, 50);
                    };

                    // Update aria-expanded on click
                    element.addEventListener('click', updateAria);

                    // Listen for Spacebar (32) and Enter (13)
                    element.addEventListener('keydown', function(e) {
                        const key = e.key || e.keyCode;
                        
                        if (key === ' ' || key === 32 ) {
                            // Prevent Spacebar from scrolling the page
                            if (key === ' ' || key === 32) {
                                e.preventDefault();
                            }
                            
                            // Log the activation for debugging
                            console.log(`Keyboard activated control for: ${element.innerText.trim()}`);
                            
                            // Trigger the click event which DataTables is already listening for
                            element.click();
                        }
                    });

                    // Mark as bound to prevent duplicate listeners on redraws
                    element.dataset.accBound = "true";
                }
            }
            }, 1000);
        });
    });
}(jQuery));
