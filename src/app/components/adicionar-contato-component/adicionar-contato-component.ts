
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AgendaService } from '../../services/agenda-service';
import { Contato, TipoContato } from '../../services/contato';


@Component({
  selector: 'app-adicionar-contato-component',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './adicionar-contato-component.html',
  styleUrl: './adicionar-contato-component.scss',
})
export class AdicionarContatoComponent {
  #agendaService = inject(AgendaService);

  contatoForm: FormGroup = new FormGroup({});

  constructor(private fb: FormBuilder) {
    
  }
  ngOnInit() {
    this.contatoForm = this.fb.group({
      nome: [''],
      telefone: [''],
      email: [''],
      aniversario: [''],
      tipo: [''],
    });
  }
  adicionarContato(){
    this.#agendaService.adicionar(this.contatoForm.value as Contato);
    this.contatoForm.reset();
    
  }
  

}
