## Przypomnienie 

### Pytania

1. Jak sprawdzić czy zmienna jest tablicą?
2. Jak dodać do siebie tablice?
3. Jak sprawdzić jakiego typu jest zmienna?
3. Czy różni się filtrowanie od mapowania?
4. Ile wartości zwraca array.reduce?
5. Jak ustawiamy wartość domyślną w funkcji?
6. Co oznacza `...`?
7. Czy `...` zawsze oznacza to samo?
8. Ile argumentów możemy tutaj przekazać? `foo(...rest)` 
9. Czym jest `constructor`?
10. Do czego używamy `extends`?
11. Czym jest `super`?
12. Jaka jest różnica pomiędzy definicją a wywołanie funkcji?
13. Czy `filter` mutuje tablicę?
14. Jak posortować elementy tablice?
15. Jak dodać do siebie dwie tablice?
16. Do czego służy `for of`?
17. Czym jest iterał obiektu?
18. Jak przeiterować po iterale obiektu?
19. Do czego służy `Object.keys()`?
20. Do czego służy `Object.entries()`?

## SetTimeout

### Zadanie 1

Swórz funkcję która wyświetli po określonym czasie przekazany napis

### Zadanie 2

W jakiej kolejności wyświetlą się informacje w konsoli?

```javascript

const foo = () => {
   console.log('0_________');
   setTimeout(()=>{ console.log('1_________')}, 0);
   setTimeout(()=>{ console.log('2_________')}, 0);
   setTimeout(()=>{ console.log('3_________')}, 200);
   console.log('4_________');
}
foo();

```

### Zadanie 3 

Do kodu poniżej dopisz zatrzymanie odliczania gdy zmienna jest parzysta

```javascript

const foo = (number) => {
   setTimeout(()=>{ alert(`Nie zatrzymano dla liczby: ${ number }`)}, 5000);
}

foo(13);
foo(10);
```

## SetInterval

### Zadanie 1 

Funkcja inkrementująca licznik o jeden co 2 sec dopóki wartość nie przekroczy liczby 10

```javascript

const increment = (number) => {
}

foo();
```


## Prompt

### Zadanie 1 

Funkcja pobierająca wiek od użytkownika i wypisująca informację czy jest pełnoletni

## Alert

### Zadanie 1 

Funkcja po `3000ms` czasie wywołuje alert z aktualną datą


## Obietnice

### Prosta obietnica

#### Zmień funkcję aby zwracała obietnicę sprawdź jej stan

```javascript
  const getPromise = () => {}
```


### Statyczne rozwiązanie i odrzucenia

#### Użyj statycznej metody `resolve` i `reject` w poniższej funkcji tak aby metoda zwracała rozwiązaną lub odrzuconą obietnicę

```javascript
  const getPromise = () => {}
```

### `then` i co wtedy??

#### Poniższa funkcja zwraca obiekt typu `Promise`. Pobierz z niego dane oraz obsłuż ewentualny błąd.

```javascript
import {getUser} from './UserApi';

getUser();
```

### `then` jako łańcuchy

#### Do poprzedniego zadania dopisz kolejną funkjcję `then` tak aby uzyskała dane z obietnicy

```javascript
import {getUser} from './UserApi';

getUser();
```

