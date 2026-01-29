import { ChangeDetectorRef, Component, signal } from '@angular/core';
import { CliInterface } from '../model/CLI-interface';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App  {
  constructor(private cdr:ChangeDetectorRef)
  {

  }
   ANGULAR_CLI_COMMANDS: CliInterface[] = [
  {
    command: 'ng new my-app',
    alias: [],
    success: ' Packages installed successfully.',
    output: [` Creating a new Angular workspace
 Installing packages (npm)
 Project created successfully.`],
    explanation: 'Creates a new Angular workspace and application.'
  },

  {
    command: 'ng version',
    alias: ['ng v'],
    success: ' Version information displayed.',
    output: [`Angular CLI: 21.x.x
Node: 22.x.x
Package Manager: npm`],
    explanation: 'Displays Angular CLI and environment versions.'
  },

  {
    command: 'ng help',
    alias: ['ng h'],
    success: ' Help information loaded.',
    output: [`Commands:
  ng add <collection>            Adds support for an external library to your project.
  ng analytics                   Configures the gathering of Angular CLI usage metrics.
  ng build [project]             Compiles an Angular application or library into an output directory named dist/ at the   
                                 given output path.                                                           [aliases: b]
  ng cache                       Configure persistent disk cache and retrieve cache statistics.
  ng completion                  Set up Angular CLI autocompletion for your terminal.
  ng config [json-path] [value]  Retrieves or sets Angular configuration values in the angular.json file for the
                                 workspace.
  ng deploy [project]            Invokes the deploy builder for a specified project or for the default project in the     
                                 workspace.
  ng e2e [project]               Builds and serves an Angular application, then runs end-to-end tests.        [aliases: e]
  ng extract-i18n [project]      Extracts i18n messages from source code.
  ng generate                    Generates and/or modifies files based on a schematic.                        [aliases: g]
  ng lint [project]              Runs linting tools on Angular application code in a given project folder.
  ng new [name]                  Creates a new Angular workspace.                                             [aliases: n]
  ng run <target>                Runs an Architect target with an optional custom builder configuration defined in your   
                                 project.
  ng serve [project]             Builds and serves your application, rebuilding on file changes.         [aliases: dev, s]
  ng test [project]              Runs unit tests in a project.                                                [aliases: t]
  ng update [packages..]         Updates your workspace and its dependencies. See https://update.angular.dev/.
  ng version                     Outputs Angular CLI version.                                                 [aliases: v]

Options:
  --help     Shows a help message for this command in the console.                                               [boolean]
  --version  Show Angular CLI version.                                                                           [boolean]

For more information, see https://angular.dev/cli/.`],
    explanation: 'Shows all available Angular CLI commands.'
  },

  {
    command: 'ng serve',
    alias: ['ng s'],
    success: 'Compiled successfully.',
    output:[ `
Initial chunk files | Names         |  Raw size
main.js             | main          |   9.36 kB | 
styles.css          | styles        | 125 bytes | 

                    | Initial total |   9.49 kB

Application bundle generation complete. [2.957 seconds] - ${new Date(Date.now())}

Watch mode enabled. Watching for file changes...
NOTE: Raw file sizes do not reflect development server per-request transformations.
  ➜  Local:   http://localhost:4200/
  ➜  press h + enter to show help`]
,
    explanation: 'Builds the app in memory and runs a dev server.'
  },

  {
    command: 'ng serve --open',
    alias: [],
    success: 'Compiled successfully.',
    output: [` Opening browser
Local: http://localhost:4200/
`],
    explanation: 'Starts dev server and opens browser automatically.'
  },

  {
    command: 'ng build',
    alias: [],
    success: ' Browser application bundle generation complete.',
    output: [`Generating browser application bundles
 Build completed.`],
    explanation: 'Builds the app for production.'
  },

  {
    command: 'ng generate component home',
    alias: ['ng g c home'],
    success: ' Component generated.',
    output:[ `CREATE src/app/home/home.spec.ts (540 bytes)
CREATE src/app/home/home.ts (189 bytes)
CREATE src/app/home/home.css (0 bytes)
CREATE src/app/home/home.html (20 bytes)`],

    explanation: 'Generates a new Angular component.'
  },

  {
    command: 'ng generate service auth',
    alias: ['ng g s auth'],
    success: 'Service generated.',
    output: [`CREATE src/app/auth.service.ts`],
    explanation: 'Generates a new Angular service.'
  },
  {
    command: 'ng test',
    alias: [],
    success: ' All tests passed.',
    output:[ `Executed 5 of 5 SUCCESS`],
    explanation: 'Runs unit tests using Karma.'
  },
  {
    command: 'ng analytics',
    alias: [],
    success: ' Analytics configuration loaded.',
    output: [` Analytics enabled.`],
    explanation: 'Shows Angular CLI analytics status.'
  },
  {
  command: 'cd home',
  alias: [],
  success: '',
  output: [''],
  explanation: 'Navigates to the src/home directory.'
}


];
  history:CliInterface[]=[];

// display_op:string[]=[];
  printOutput(base:CliInterface,final_val:string)
  {
       this.history.push({
      command:final_val,
      success:base.success,
      explanation:base.explanation,
      output:[]

    });
    
    
    const delay=500;
    const lines:string[]=base.output[0].split('\n');
    lines.forEach((line,index)=>{
      setTimeout(() => {
        this.history[this.history.length-1].output=[...this.history[this.history.length-1].output,line]
        this.cdr.detectChanges();
        console.log(line,index)
      },index*delay) ;
     
    })

  }


  UpdateInput(value:string,input:HTMLInputElement)
  {
  
    const final_val=value;
    value=value.toLowerCase()
    if(value=='cls' || value=='clear')
    {
      this.history.length=0;
      
    }
    else{
    const base=this.ANGULAR_CLI_COMMANDS.find((cmd)=>cmd.command=== value || cmd.alias?.includes(value))
   if(base)
   {
    
    this.printOutput(base,final_val);
          
   }
   else{
    this.history.push({command:final_val,
        success:"command failed.",
        output:["This is Invalid Angular Cli command"],
        explanation:"You enter the wrong command please try again"
    })
   }

  }
    input.value=""

  }
}
