export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '6081550eb906ec13d6bc55cc',
                  title: 'Sanity Studio',
                  name: 'land-11-studio',
                  apiId: '9c4d3dc1-53c7-4baf-8a8d-383df468d136'
                },
                {
                  buildHookId: '6081550e7464f01038bb9476',
                  title: 'Landing pages Website',
                  name: 'land-11',
                  apiId: '4863328d-8480-4d27-9f15-72d91f30f6cf'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/SupaDupa24/land11',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://land-11.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
