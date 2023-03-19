## Dependencies

## Zależności

Motywy są napisane przy użyciu Sass, aby zachować modularność i zredukować potrzebę powtarzania selektorów w różnych plikach. Upewnij się, że masz zainstalowane środowisko programistyczne reveal.js zanim przejdziesz dalej: https://revealjs.com/installation/#full-setup

## Creating a Theme

Aby stworzyć własny motyw, zacznij od zduplikowania pliku ```.scss``` w [/css/theme/source](https://github.com/hakimel/reveal.js/blob/master/css/theme/source). Zostanie on automatycznie skompilowany z Sass do CSS (zobacz [gulpfile](https://github.com/hakimel/reveal.js/blob/master/gulpfile.js)) gdy uruchomisz `npm run build -- css-themes`.

Każdy plik tematyczny wykonuje cztery rzeczy w następującej kolejności:

1. **Włącza [/css/theme/template/mixins.scss](https://github.com/hakimel/reveal.js/blob/master/css/theme/template/mixins.scss)**
Wspólne funkcje użytkowe.

2. **Włącza [/css/theme/template/settings.scss](https://github.com/hakimel/reveal.js/blob/master/css/theme/template/settings.scss)**
Deklaruje zestaw niestandardowych zmiennych, których oczekuje plik szablonu (krok 4). Można je nadpisać w kroku 3.

3. **Nadpisanie**
To miejsce, w którym zastępujesz domyślny motyw. Albo przez określenie zmiennych (zobacz [settings.scss](https://github.com/hakimel/reveal.js/blob/master/css/theme/template/settings.scss) for reference) lub dodając dowolne selektory i style, które chcesz.

4. **Włącza [/css/theme/template/theme.scss](https://github.com/hakimel/reveal.js/blob/master/css/theme/template/theme.scss)**
Plik motywu szablonu, który wygeneruje ostateczne wyjście CSS w oparciu o aktualnie zdefiniowane zmienne.
