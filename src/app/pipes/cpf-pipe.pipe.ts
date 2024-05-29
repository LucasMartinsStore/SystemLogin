import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cpfPipe',
})
export class CpfPipePipe implements PipeTransform {
  transform(doc: string): string {
    const docWithoutSpaces = doc.replace(/\D/g, '');
    const docLength = docWithoutSpaces.length;

    if (docLength === 11) {
      return this.formatedCPF(docWithoutSpaces);
    }

    return docWithoutSpaces;
  }

  private formatedCPF(cpf: string): string {
    return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
  }
}
