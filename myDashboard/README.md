# MyDashboard

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.1.5.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

This is a basic dashboard component that I created (Josh Elkins)
 

it uses freely available icons from lucide, 
an open weather API (TBD)

The design css came from ChatGPT, but the scaffolding 
and code logic is mostly my own in an attempt to learn Angular TS development. 


It consists of a base dashboard component 
that is a container for multiple components
that are shown modally. They have services and models
that are specific to their funcionality



Dev path I took - 


1. Created the base Dashboard component & it's CSS
2. Imported the DashboardComponent into main.ts for use across the app
3. Imported the lucide-angular library and selected modules 
    to use icons
4. Created a dashboard button control panel that houses
    the buttons to call the indiviual modal components
5.  Imported the angular lucide module into the dashboard control panel - not sure if I need to do this? 

6. Started by creating the modal weather component 
    a. created base component - ng g c weather
        1. work on component - 
            1. add function to get weather
            2. add input to receive zip code from ui
                a. we need to adjust the weather component to handle
                    what happens when we make & await the 
                    call to our service, so we'll use the '.subscribe' 
                    on our 'observable', which in this case is our data. 
                b. we then have the default events/properties to 
                    handle our subscribe event 
                        1. "next:" - the default event of what to do next once receiving the data 
                        2. "error:" - the default for an error
                        3. "complete:" - once the subscribe complete
                    Important - all of these properties on the subscription 
                    can be extended functionally by using an arrow expression with a 
                    value parameter like (data) => {//do something}. 

            2.  import necessary modules - do I need CommonModule??
            1. yes - you needed to reference the forms module and the common module 
                as well as adding them to the imported components array in the setup block
        3. ensure HttpClient is installed
        4. create constructor for component that DIs in the weather service (step b)
        
    b. created WeatherService - ng generate service services/weather/weather 
    c. created .net webAPI to handle weather request/response
    d. added logic to the base control panel component to 
        actually handle the invocation 
            1. to start, we'll add properties to the modal-component 
                to ensure that we can track visibility
        properties that will be added/tied to methods - 
        IMPORTANT - the below are added/defined in the DASHBOARD component - not the invidual 
            modal component 
            - property -  showWeatherModal = false; 
            - method - openWeatherModal() 
                            action = this.showWeatherModal = true;
            - method - closeWeatherModal() 
                            action = this.showWeatherModal = false; _ 
            After those are created & referenced, we'll need to change the html template to 
            reference the properties & actions. This work is going to take place in the dashboard component
        




