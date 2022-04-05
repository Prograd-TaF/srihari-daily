const postTilesContainer = document.getElementById('post-tiles-container');

const togglePostModal = (id, show) => {
    const modal = document.getElementById(id);
    modal.className = show ? '' : 'hidden'; 
}

const toggleCreatePostModal = (show) => {
    const modal = document.getElementById('create-post-modal');
    modal.hidden = !show;
}

const handleCreateNewPost = () => {
    const title = document.getElementById('create-post-input-title').value;
    const intro = document.getElementById('create-post-input-intro').value;
    const content = document.getElementById('create-post-input-content').value;
    const image = document.getElementById('create-post-input-image').value;

    const post = {
        id: POSTS.length + 1,
        title,
        intro,
        content,
        image: {
            url: image,
            alt: title,
            width: "1200",
            height: "1350"
        },
        date: new Date().toISOString().slice(0, 10)
    }
    POSTS.push(post);
    createPost(post)

    toggleCreatePostModal(false);
}

const createPostTile = (id, title, intro, date) => {
    const postTile = document.createElement('div')
    postTile.id = `post-tile-${id}`;
    postTile.innerHTML = `
        <p class="text-sm text-gray-500">
            <time datetime="${date.toISOString().slice(0,10)}">${date.toDateString()}</time>
        </p>
        <div class="mt-2 block">
            <p class="text-xl font-semibold text-gray-900">
                ${title}
            </p>
            <p class="mt-3 text-base text-gray-500">
                ${intro}
            </p>
        </div>
        <div class="mt-3">
            <div onclick="togglePostModal('post-modal-${id}', true)" class="cursor-pointer text-base font-semibold text-indigo-600 hover:text-indigo-500">
            Read full story
            </div>
        </div>
    `;

    return postTile;
}

const createModal = (id, content) => {
    const modal = document.createElement('div');
    modal.id = id;
    modal.className = 'hidden';
    modal.innerHTML = `
        <div class="bg-gray-300">
            <div class="fixed z-10 inset-0 overflow-y-auto">
                <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                    <div class="fixed inset-0 transition-opacity" aria-hidden="true">
                        <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
                    </div>
    
                    <div class="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 align-middle p-6 mx-6" role="dialog" aria-modal="true" aria-labelledby="modal-headline">
                        <div class="block z-10 absolute top-0 right-0 pt-4 pr-4">
                            <button onclick="togglePostModal('${id}', false)" class="cursor-pointer bg-white rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            <span class="sr-only">Close</span>
                            <svg class="h-6 w-6" x-description="Heroicon name: outline/x" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                            </svg>
                            </button>
                        </div>
                        <div class="sm:flex sm:items-start">
                            ${content}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;

    return modal;
}

const createPostModal = (id, title, intro, content, image) => {
    const modalId = `post-modal-${id}`;
    const ModalContent = `
        <div class="bg-white overflow-hidden">
            <div class="relative max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
                <div class="mx-auto text-base max-w-prose lg:max-w-none">
                    <h2 class="text-base text-indigo-600 font-semibold tracking-wide uppercase">Case Study</h2>
                    <h3 class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">Meet Whitney</h3>
                </div>
                <div class="mt-8 lg:grid lg:grid-cols-2 lg:gap-8">
                    <div class="relative lg:row-start-1 lg:col-start-2">
                    <div class="relative text-base mx-auto max-w-prose lg:max-w-none">
                        <figure>
                        <div class="aspect-w-12 aspect-h-7 lg:aspect-none">
                            <img 
                                class="rounded-lg shadow-lg object-cover object-center" 
                                src="${image.url}" 
                                alt="${image.alt || title}" 
                                width="${image.width}" 
                                height="${image.height}"
                            />
                        </div>
                        <figcaption class="mt-3 flex text-sm text-gray-500">
                            <svg class="flex-none w-5 h-5 text-gray-400" x-description="Heroicon name: solid/camera" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fill-rule="evenodd" d="M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1.586a1 1 0 01-.707-.293l-1.121-1.121A2 2 0 0011.172 3H8.828a2 2 0 00-1.414.586L6.293 4.707A1 1 0 015.586 5H4zm6 9a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd"></path>
                            </svg>
                            <span class="ml-2">${title}</span>
                        </figcaption>
                        </figure>
                    </div>
                    </div>
                    <div class="mt-8 lg:mt-0">
                    <div class="text-base max-w-prose mx-auto lg:max-w-none">
                        <p class="text-lg text-gray-500">
                            ${intro}
                        </p>
                    </div>
                    <div class="mt-5 prose prose-indigo text-gray-500 mx-auto lg:max-w-none lg:row-start-1 lg:col-start-1">
                        <p>${content}</p>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    `;

    return createModal(modalId, ModalContent);
}

const createPost = (id, title, intro, dateString, content, image) => {
    const date = new Date(dateString);

    const postTile = createPostTile(id, title, intro, date);
    const postModal = createPostModal(id, title, intro, content, image);


    postTilesContainer.appendChild(postTile);
    document.body.appendChild(postModal)
}


// createPost(
//     1, 
//     "Boost your conversion rate", 
//     "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.", 
//     "2020-03-16",
//     `
//     Sollicitudin tristique eros erat odio sed vitae, consequat turpis elementum. Lorem nibh vel, eget pretium arcu vitae. Eros eu viverra donec ut volutpat donec laoreet quam urna.
//     Bibendum eu nulla feugiat justo, elit adipiscing. Ut tristique sit nisi lorem pulvinar. Urna, laoreet fusce nibh leo. Dictum et et et sit. Faucibus sed non gravida lectus dignissim imperdiet a.
//     Dictum magnis risus phasellus vitae quam morbi. Quis lorem lorem arcu, metus, egestas netus cursus. In.
//     Rhoncus nisl, libero egestas diam fermentum dui. At quis tincidunt vel ultricies. Vulputate aliquet velit faucibus semper. Pellentesque in venenatis vestibulum consectetur nibh id. In id ut tempus egestas. Enim sit aliquam nec, a. Morbi enim fermentum lacus in. Viverra.

//     Tincidunt integer commodo, cursus etiam aliquam neque, et. Consectetur pretium in volutpat, diam. Montes, magna cursus nulla feugiat dignissim id lobortis amet. Laoreet sem est phasellus eu proin massa, lectus. Diam rutrum posuere donec ultricies non morbi. Mi a platea auctor mi.
//     Sagittis scelerisque nulla cursus in enim consectetur quam. Dictum urna sed consectetur neque tristique pellentesque. Blandit amet, sed aenean erat arcu morbi.
//     `, 
//     {
//         url: "https://images.unsplash.com/photo-1546913199-55e06682967e?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;crop=focalpoint&amp;fp-x=.735&amp;fp-y=.55&amp;w=1184&amp;h=1376&amp;q=80",
//         alt: "Whitney leaning against a railing on a downtown street",
//         width: "1184",
//         height: "1376"

//     }
// )


for (let { id, title, intro, date, content, image } of POSTS) {
    createPost(id, title, intro, date, content, image);
}