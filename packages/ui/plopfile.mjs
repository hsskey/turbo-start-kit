import minimist from 'minimist'

export default function (plop) {
  const args = minimist(process.argv.slice(2))

  plop.setGenerator('component', {
    description: 'React component generator',
    prompts: [
      // name 옵션이 없을 때만 프롬프트를 표시합니다
      ...(!args.name
        ? [
            {
              type: 'input',
              name: 'name',
              message: 'Component name:'
            }
          ]
        : [])
    ],
    actions: function (data) {
      // CLI 옵션으로 전달된 값을 사용합니다
      const names = Array.isArray(args.name)
        ? args.name
        : [args.name || data.name]

      return names.flatMap((name) => [
        {
          type: 'add',
          path: `components/mantine/${plop.getHelper('kebabCase')(name)}/${plop.getHelper('kebabCase')(name)}.tsx`,
          templateFile: 'plop-templates/component/component.tsx.hbs',
          data: { name }
        },
        {
          type: 'add',
          path: `components/mantine/${plop.getHelper('kebabCase')(name)}/index.ts`,
          template:
            "export { {{pascalCase name}} } from './{{kebabCase name}}'",
          data: { name }
        }
      ])
    }
  })
}
