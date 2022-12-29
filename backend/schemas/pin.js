export const pin = {
    name: 'pin',
    title: 'pin',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'title',
            type: 'string'
        },
        {
            name: 'about',
            title: 'about',
            type: 'string'
        },
        {
            name: 'destination',
            title: 'destination',
            type: 'url'
        },
        {
            name: 'category',
            title: 'category',
            type: 'string',

        },
        {
            name: 'image',
            title: 'image',
            type: 'image',
            options: {
                hotspot: true
            }
        },
        {
            name: 'userId',
            title: 'userId',
            type: 'string',
        },
        {
            name: 'postedBy',
            title: 'postedBy',
            type: 'postedBy',
        },
        {
            name: 'save',
            title: 'save',
            type: 'array',
            of: [{
                type: 'save',
            }]
        },
        {
            name: 'comments',
            title: 'comments',
            type: 'array',
            of: [{
                type: 'comment'
            }]
        },
    ]
}