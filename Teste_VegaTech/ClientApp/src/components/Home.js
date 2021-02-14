import React, { Component } from 'react';

export class Home extends Component {
  static displayName = Home.name;

  render () {
    return (
      <div>
        <h1>Hello, VegaTech!</h1>
        <p>My name is Allan, this is a submission for the internship test. This application was developed utilizing Visual Studio's own template for .NET Core and ReactJS</p>
        <p>The UX and page structure is pre-built. The pages themselves and the models were developed by myself to fit the test's requirements. Controllers were generated using Visual Studio.</p>
        <p>You can navigate to the pages using the navmenu on the top right.</p>
        <p>I had some difficulties and wasn't able to fully complete all features, but this is what I managed to develop so far, and it was better to submit an incomplete project than to not respond. This doesn't really satisfy the basic requirements of the test, but it was better to show what I tried rather than submit nothing. Thank you for the attention and opportunity!</p>
        <p>What follows is a brief explanation of the logic that I understood, but wasn't able to impletement due to lack of knowledge about the technology and its syntaxes: The QRCode is not a field on the table itself, rather a variable on the application that should read the fields CNPJ, CEP and Register Date from the database and return it in a function. The "%" characters should be required as a form validation, but not recorded into the database itself. When the user selects the corresponding Supplier ID, it should call the QRCode function, that would then fetch the aforementioned data from the Database and show them in the form.</p>
        <p>You can find the same (and more) information in the Readme, written in Portuguese.</p>
      </div>
    );
  }
}
