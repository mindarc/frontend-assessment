document.addEventListener("DOMContentLoaded", function() {
    const data = [
        {
            "title": "Section 1",
            "content": "<p>Maecenas nec semper ante, pellentesque posuere lorem. Nullam ipsum massa, consequat eget urna ut, pulvinar dignissim lorem. Nulla facilisi. Nam mattis eleifend metus. Fusce at commodo lorem. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Phasellus pellentesque elit sem, vel blandit posuere.</p>"
        },
        {
            "title": "Section 2",
            "content": "<p>Mauris a orci sodales, scelerisque velit vitae, gravida nisl. Ut non laoreet eros, vel laoreet nisi. Praesent sed dolor dui. Proin non fringilla quam. Aliquam erat volutpat. Vestibulum vel arcu semper, lobortis turpis ac, ultricies nisi. Praesent id.</p>"
        },
        {
            "title": "Section 3",
            "content": "<p>Sed elementum sapien ut sapien imperdiet, eu venenatis enim rhoncus. Praesent euismod tincidunt rhoncus. Duis cras amet:</p><ul><li>List item one</li><li>List item two</li><li>List item three</li></ul>"
        },
        {
            "title": "Section 4",
            "content": "<p>Cras dictum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aenean lacinia mauris vel est.</p><p>Suspendisse eu nisl. Nullam ut libero. Integer dignissim consequat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>"
        }
    ];

    const tabsTitlesContainer = document.getElementById('tab-titles');
    const tabsContentsContainer = document.getElementById('tab-contents');
    const accordionContainer = document.getElementById('accordion');

    data.forEach((section, index) => {
        // Create tab title
        const tabTitle = document.createElement('div');
        tabTitle.className = 'tab-title';
        tabTitle.innerText = section.title;
        tabTitle.dataset.index = index;
        tabTitle.tabIndex = 0; // Make tab title focusable

        // Create tab content
        const tabContent = document.createElement('div');
        tabContent.className = 'tab-content';
        tabContent.innerHTML = section.content;

        tabTitle.addEventListener('click', () => {
            document.querySelectorAll('.tab-title').forEach((title, i) => {
                if (i === index) {
                    title.classList.add('active');
                } else {
                    title.classList.remove('active');
                }
            });
            document.querySelectorAll('.tab-content').forEach((content, i) => {
                if (i === index) {
                    content.style.display = 'block';
                } else {
                    content.style.display = 'none';
                }
            });
        });

        tabTitle.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                tabTitle.click();
            }
        });

        tabsTitlesContainer.appendChild(tabTitle);
        tabsContentsContainer.appendChild(tabContent);

        // Create accordion
        const accordionItem = document.createElement('div');
        accordionItem.className = 'accordion-item';

        const accordionTitle = document.createElement('div');
        accordionTitle.className = 'accordion-title';
        accordionTitle.innerText = section.title;
        accordionTitle.dataset.index = index;

        const accordionContent = document.createElement('div');
        accordionContent.className = 'accordion-content';
        accordionContent.innerHTML = section.content;

        accordionTitle.addEventListener('click', () => {
            document.querySelectorAll('.accordion-content').forEach((content, i) => {
                if (i === index) {
                    content.style.display = content.style.display === 'block' ? 'none' : 'block';
                } else {
                    content.style.display = 'none';
                }
            });
        });

        accordionItem.appendChild(accordionTitle);
        accordionItem.appendChild(accordionContent);
        accordionContainer.appendChild(accordionItem);
    });

    // Open first tab and accordion on load
    if (document.querySelector('.tab-title')) {
        document.querySelector('.tab-title').classList.add('active');
    }
    if (document.querySelector('.tab-content')) {
        document.querySelector('.tab-content').style.display = 'block';
    }
    if (document.querySelector('.accordion-content')) {
        document.querySelector('.accordion-content').style.display = 'block';
    }
});
