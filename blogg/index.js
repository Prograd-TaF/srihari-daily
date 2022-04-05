const URL = "http://localhost:3000";

const POSTS = [
    {
        "id": 1, 
        "title": "Boost your conversion rate", 
        "intro": "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.", 
        "date": "2020-03-16",
        "content": "Sollicitudin tristique eros erat odio sed vitae, consequat turpis elementum. Lorem nibh vel, eget pretium arcu vitae. Eros eu viverra donec ut volutpat donec laoreet quam urna. Bibendum eu nulla feugiat justo, elit adipiscing. Ut tristique sit nisi lorem pulvinar. Urna, laoreet fusce nibh leo. Dictum et et et sit. Faucibus sed non gravida lectus dignissim imperdiet a.\n\n Dictum magnis risus phasellus vitae quam morbi. Quis lorem lorem arcu, metus, egestas netus cursus. In. Rhoncus nisl, libero egestas diam fermentum dui. At quis tincidunt vel ultricies. Vulputate aliquet velit faucibus semper. Pellentesque in venenatis vestibulum consectetur nibh id. In id ut tempus egestas. Enim sit aliquam nec, a. Morbi enim fermentum lacus in. Viverra. Tincidunt integer commodo, cursus etiam aliquam neque, et. Consectetur pretium in volutpat, diam. Montes, magna cursus nulla feugiat dignissim id lobortis amet.\n Laoreet sem est phasellus eu proin massa, lectus. Diam rutrum posuere donec ultricies non morbi. Mi a platea auctor mi.\n Sagittis scelerisque nulla cursus in enim consectetur quam.\n Dictum urna sed consectetur neque tristique pellentesque.\n Blandit amet, sed aenean erat arcu morbi.", 
        "image": {
            "url": "https://images.unsplash.com/photo-1546913199-55e06682967e?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;crop=focalpoint&amp;fp-x=.735&amp;fp-y=.55&amp;w=1184&amp;h=1376&amp;q=80",
            "alt": "Whitney leaning against a railing on a downtown street",
            "width": "1184",
            "height": "1376"

        }
    },
    {
        "id": 2, 
        "title": "Boost your conversion rate", 
        "intro": "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.", 
        "date": "2020-03-16",
        "content": "Sollicitudin tristique eros erat odio sed vitae, consequat turpis elementum. Lorem nibh vel, eget pretium arcu vitae. Eros eu viverra donec ut volutpat donec laoreet quam urna. Bibendum eu nulla feugiat justo, elit adipiscing. Ut tristique sit nisi lorem pulvinar. Urna, laoreet fusce nibh leo. Dictum et et et sit. Faucibus sed non gravida lectus dignissim imperdiet a.\n\n Dictum magnis risus phasellus vitae quam morbi. Quis lorem lorem arcu, metus, egestas netus cursus. In. Rhoncus nisl, libero egestas diam fermentum dui. At quis tincidunt vel ultricies. Vulputate aliquet velit faucibus semper. Pellentesque in venenatis vestibulum consectetur nibh id. In id ut tempus egestas. Enim sit aliquam nec, a. Morbi enim fermentum lacus in. Viverra. Tincidunt integer commodo, cursus etiam aliquam neque, et. Consectetur pretium in volutpat, diam. Montes, magna cursus nulla feugiat dignissim id lobortis amet.\n Laoreet sem est phasellus eu proin massa, lectus. Diam rutrum posuere donec ultricies non morbi. Mi a platea auctor mi.\n Sagittis scelerisque nulla cursus in enim consectetur quam.\n Dictum urna sed consectetur neque tristique pellentesque.\n Blandit amet, sed aenean erat arcu morbi.", 
        "image": {
            "url": "https://images.unsplash.com/photo-1546913199-55e06682967e?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;crop=focalpoint&amp;fp-x=.735&amp;fp-y=.55&amp;w=1184&amp;h=1376&amp;q=80",
            "alt": "Whitney leaning against a railing on a downtown street",
            "width": "1184",
            "height": "1376"

        }
    },
    {
        "id": 3, 
        "title": "Boost your conversion rate", 
        "intro": "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.", 
        "date": "2020-03-16",
        "content": "Sollicitudin tristique eros erat odio sed vitae, consequat turpis elementum. Lorem nibh vel, eget pretium arcu vitae. Eros eu viverra donec ut volutpat donec laoreet quam urna. Bibendum eu nulla feugiat justo, elit adipiscing. Ut tristique sit nisi lorem pulvinar. Urna, laoreet fusce nibh leo. Dictum et et et sit. Faucibus sed non gravida lectus dignissim imperdiet a.\n\n Dictum magnis risus phasellus vitae quam morbi. Quis lorem lorem arcu, metus, egestas netus cursus. In. Rhoncus nisl, libero egestas diam fermentum dui. At quis tincidunt vel ultricies. Vulputate aliquet velit faucibus semper. Pellentesque in venenatis vestibulum consectetur nibh id. In id ut tempus egestas. Enim sit aliquam nec, a. Morbi enim fermentum lacus in. Viverra. Tincidunt integer commodo, cursus etiam aliquam neque, et. Consectetur pretium in volutpat, diam. Montes, magna cursus nulla feugiat dignissim id lobortis amet.\n Laoreet sem est phasellus eu proin massa, lectus. Diam rutrum posuere donec ultricies non morbi. Mi a platea auctor mi.\n Sagittis scelerisque nulla cursus in enim consectetur quam.\n Dictum urna sed consectetur neque tristique pellentesque.\n Blandit amet, sed aenean erat arcu morbi.", 
        "image": {
            "url": "https://images.unsplash.com/photo-1546913199-55e06682967e?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;crop=focalpoint&amp;fp-x=.735&amp;fp-y=.55&amp;w=1184&amp;h=1376&amp;q=80",
            "alt": "Whitney leaning against a railing on a downtown street",
            "width": "1184",
            "height": "1376"

        }
    }
]