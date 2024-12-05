# React + TypeScript + Vite

useEffect( function , dependencyArray ) => Verilen bagimlilik degisince ve her render da tetiklenir . Icerisindeki functionda return edilen bir kisim varsa bu temizlik function u olarak gecer ve unmount veya useEffect in ayni component icinde tekrar tetiklenmesi sirasinda calisir.

useCallback( function , dependencyArray ) => Fonksiyonun her renderda tekrardan olusturulmasini engeller ve bagimlilik olarak verilen parametrelerin degeri degismedigi sürece render islemi yapilmaz.

useMemo( function , dependencyArray ) => Yüksek performans gerektiren komplike isler yapan fonksiyonlarin sonucunu önbellege alir ve bagimlilik olarak verilen parametreler degismedigi sürece tekrar hesaplama yapilmaz.

memo()=> memo hooksu componentin propsu degismedigi sürece componenti tekrar render etmez. Bu da performans icin fayda saglar. Componentin ana fonsiyonu yazilirken yani // const Header = memo(function(){.... return <p>hallo</p>}) gibi veya export ederken
yani // export default memo(Header) seklinde kullanilabilir . Sadece büyük ve maliyetli bileşenleri veya sık sık gereksiz render olan bileşenleri memo() ile sarmak mantıklıdır.

lazy() ==> Componentleri lazy loading olarak yüklemek istediginde yani component sadece render edilme ihtiyaci duyuldugunda render edilmesini istediginde lazy fonksiyonunu import edip daha sonra en üstte diger importlari yaptigin yerde dinamik importla componentini import ederek layz loading yapabilirsin . // const LazyComponent = lazy(()=>import("src/components/LazyComponent"))

Profiler ==> Bir componentin kac defa render edildigini , renderin ne kadar sürdügünü ve neden render edildigini görmemizi saglar . bu bilgileri istersek consola yazabiliriz. // örnek:

```
 <Profiler
id="ToDoCreate"
onRender={(id, phase, actualDration, baseDuration,startTime,commitTime) =>console.log(id, phase, actualDration, baseDuration)} >
  <ToDoCreate />
</Profiler>
```

Array.sort() ==> Bu fonksiyonun icerisine bir fonksiyon verilip ona göre siralama yaptirilabilir . // Örnek

```js
const numbers = [10, 2, 9, 1, 7];

numbers.sort((a, b) => a - b); // Küçükten büyüğe sıralama

console.log(numbers); // [1, 2, 7, 9, 10]

// a - b küçükten büyüğe sıralar.
// b - a büyükten küçüğe sıralar.

/*
Pozitif değer: a daha büyük, b daha küçük → b, anın önüne geçer.
Negatif değer: a daha küçük, b daha büyük → a, bnin önünde kalır.
0: İkisi eşitse yerleri değişmez.
*/
```
