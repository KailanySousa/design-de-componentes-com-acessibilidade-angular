import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Design de componentes com acessibilidade';
  yesNoAnswer = 'no';

  disable: boolean;
  form: FormGroup = null;

  constructor(formBuilder: FormBuilder) {
    this.form = formBuilder.group({
      yesNoAnswer: [{
        value: 'no',
        disabled: false
      }]
    })
  }

  public submit(): void {
    this.disable = true;
    console.log(this.form.value)
  }
}
