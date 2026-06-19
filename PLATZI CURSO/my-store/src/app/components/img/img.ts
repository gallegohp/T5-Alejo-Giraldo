import { Component, Input , Output, EventEmitter, OnChanges, OnInit, AfterViewInit, OnDestroy, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-img',
  standalone: false,
  templateUrl: './img.html',
  styleUrl: './img.scss',
})
export class Img implements OnChanges, OnInit, AfterViewInit, OnDestroy {

  img: string = '';
  @Input('img')
  set changeImg(newImg: string) {
    this.img = newImg;
    console.log('cambio la imagen =>' , this.img)
    //codigo
  }
  @Input() alt: string = '';
  @Output() loaded = new EventEmitter<string>();

  imageDefault = 'https://raw.githubusercontent.com/platzi/angular-componentes/2-step/src/assets/images/default.png'
  // counter = 0;
  // counterFn : number | undefined;

  constructor() {
    //se ejecuta antes del render
    //no corre cosas asincronas, como peticiones o subcripciones
    //solo se corre una vez
    console.log('contructor', 'imgValue =>', this.img)
  }

  ngOnChanges(changes: SimpleChanges) {
    //corre antes del render
    //corre al hacer cambios en el input, cada vez que se cambie algo
    console.log('ngOnChanges', 'imgValue => ', this.img)
    console.log('changes', changes);
  }

  ngOnInit(): void {
    //antes del render
    //Si podemos correr cosas ASINCRONAS, llamdas a apis, promesas
    //solo se corre 1 vez, cuando se inicializa el componente
    console.log('ngOnInit', 'imgValue => ', this.img)

    // this.counterFn = window.setInterval(() => {
    //   this.counter += 1;
    //   console.log('run counter')
    // }, 1000);

  }

  ngAfterViewInit(): void {
    //despues del render
    //se manejan los hijos, si el componente tiene hijos, ejecutar eventos de los hijos
    //esos componenete ya deberian estar renderizados
    console.log('ngAfterViewInit', 'imgValue => ', this.img)

  }

  ngOnDestroy(): void {
    //cuando se elimina el componente, un ngif,crea un compontnete y quita un componente, literalmente deja de exister
    console.log('ngOnDistroy', 'imgValue => ', this.img)
    // window.clearInterval(this.counterFn);
    
  }

  imgError() {
    console.log("error al cargar la imagen")
    this.img = this.imageDefault;
  }

  imgLoaded(){
    console.log('log hijo')
    this.loaded.emit(this.img);
  }

}
