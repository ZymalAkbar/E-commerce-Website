export default {
    name: 'earring',
    type: 'document',
    title: 'Earring',
    fields: [
        {
            name: 'name',
            type: 'string',
            title: 'Name'
        },
        {
            name: 'slug',
            type: 'slug',
            title: 'Slug',
            options: {
                source: 'name', 
                maxLength: 96, 
              },
        
        },
        {
            name: 'image',
            type: 'array',
            title: 'Image',
            of:[{
                name:'image',
                title:'Image',
                type:'image'
            }]
        },
        {
            name: 'description',
            type: 'string',
            title: 'Description'
        },
        {
            name: 'price',
            type: 'number',
            title: 'Price'
        }
    ]
}