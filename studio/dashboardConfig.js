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
                  buildHookId: '5f755853d3c9a49a7163cfd4',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-sob1r2or',
                  apiId: 'bb40c3d0-4e97-48ef-87c2-b84c92b92fee'
                },
                {
                  buildHookId: '5f755853a4ea868782d61b23',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-c2trzjo9',
                  apiId: 'c9b27a48-f68c-40eb-9282-cc102d3f692f'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/lei-cao/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-c2trzjo9.netlify.app', category: 'apps'}
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
