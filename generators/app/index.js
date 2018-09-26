const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');
const path = require('path');

module.exports = class extends Generator {
  prompting() {
    // Have Yeoman greet the user.
    this.log(yosay(`Welcome to the wicked ${chalk.red('generator-create-react-web')} generator!`));

    const prompts = [
      {
        type: 'input',
        name: 'name',
        message: 'name:',
        default: path.basename(process.cwd())
      },
      {
        type: 'input',
        name: 'description',
        message: 'description:',
        default: ''
      },
      {
        type: 'list', // 提供选择的列表
        name: 'structure',
        message: 'Please select project framework Structure?',
        choices: [
          {
            name: 'legacy',
            value: 'legacy'
          },
          {
            name: 'dva',
            value: 'dva'
          }
        ]
      },
      {
        type: 'list', // 提供选择的列表
        name: 'type',
        message: 'Please select project language type?',
        choices: [
          {
            name: 'js',
            value: 'js'
          },
          {
            name: 'ts',
            value: 'ts'
          }
        ]
      },
      {
        type: 'input',
        name: 'repo',
        message: 'git repository:',
        default: ''
      },
      {
        type: 'input',
        name: 'license',
        message: 'license:',
        default: 'ISC'
      },
      {
        type: 'input',
        name: 'author',
        message: 'author:',
        default: ''
      },
      {
        type: 'input',
        name: 'port',
        message: 'port:',
        default: '8888'
      }
    ];

    return this.prompt(prompts).then(props => {
      this.customParameters = props;
    });
  }

  writing() {
    // this.fs.copy(this.templatePath('ui'), this.destinationPath('ui'));
    // this.fs.copyTpl(this.templatePath('package.json'), this.destinationPath('package.json'), this);
    // this.fs.copy(this.templatePath('gulpfile.js'), this.destinationPath('gulpfile.js'));
    // this.fs.copyTpl(this.templatePath('webpack.dev.config.js'), this.destinationPath('webpack.dev.config.js'), this);
    this.log(this.customParameters);
    // this.copyPath.call(this, this.customParameters.structure, this.customParameters.type);
    this.fs.copyTpl(this.templatePath(`${this.customParameters.structure}/${this.customParameters.type}/package.json`), this.destinationPath('package.json'), this);
    this.fs.copy(this.templatePath(`${this.customParameters.structure}/${this.customParameters.type}/index.js`), this.destinationPath('index.js'));

    // this.fs.copy(this.templatePath('src'), this.destinationPath('src'));
    // this.fs.copy(this.templatePath('vendor'), this.destinationPath('vendor'));
    // this.fs.copy(this.templatePath('provision'), this.destinationPath('provision'));
    // this.fs.copy(this.templatePath('language'), this.destinationPath('language'));
    // this.fs.copy(this.templatePath('ci_script'), this.destinationPath('ci_script'));
    // this.fs.copy(this.templatePath('Dockerfile'), this.destinationPath('Dockerfile'));
    // this.fs.copy(this.templatePath('nginx.conf.example'), this.destinationPath('nginx.conf.example'));
    // this.fs.copy(this.templatePath('runUi.js'), this.destinationPath('runUi.js'));
    // this.fs.copy(this.templatePath('tsconfig.json'), this.destinationPath('tsconfig.json'));
    // this.fs.copy(this.templatePath('tslint.json'), this.destinationPath('tslint.json'));
    // this.fs.copy(this.templatePath('Vagrantfile'), this.destinationPath('Vagrantfile'));
    // this.fs.copy(this.templatePath('webpack.config.js'), this.destinationPath('webpack.config.js'));
    // this.fs.copy(this.templatePath('webpack.deploy.beta.config.js'), this.destinationPath('webpack.deploy.beta.config.js'));
    // this.fs.copy(this.templatePath('webpack.deploy.config.js'), this.destinationPath('webpack.deploy.config.js'));
    // this.fs.copy(this.templatePath('webpack.dll.config.js'), this.destinationPath('webpack.dll.config.js'));
  }

  install() {
    this.installDependencies();
  }
};
