import { Args, Float, Int, Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class HelloWorldResolver {

    @Query(() => String, { description: 'Hola mundo es lo que retorna', name: 'hello' })
    helloWorld(): string {
        return 'Hola Mundo';
    }

    @Query(() => Float, { description: 'Es un numero aleatorio del 1 al 100 con decimales', name: 'randomNumber' })
    getRandomNumber(): number {
        return Math.random() * 100;
    }

    @Query(() => Int, { description: 'Es un numero aleatorio entero del 0 a un número especificado', name: 'randomToTen' })
    getRandomZeroToTenNumber(
        @Args('to',
            { nullable: true, type: () => Int } //nullable indica que es un argumento optativo, type especifica el tipo de argumento esperado
        ) to: number = 6
    ) // Se configura un valor por default en caso que el parametro no se lo especifique
        : number {
        return Math.round(Math.random() * to);
    }


}
