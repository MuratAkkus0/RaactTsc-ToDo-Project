# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ["./tsconfig.node.json", "./tsconfig.app.json"],
      tsconfigRootDir: import.meta.dirname,
    },
  },
});
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from "eslint-plugin-react";

export default tseslint.config({
  // Set the react version
  settings: { react: { version: "18.3" } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs["jsx-runtime"].rules,
  },
});
```

useEffect( function , dependencyArray ) => Verilen bagimlilik degisince ve her render da tetiklenir . Icerisindeki functionda return edilen bir kisim varsa bu temizlik function u olarak gecer ve unmount veya useEffect in ayni component icinde tekrar tetiklenmesi sirasinda calisir.

useCallback( function , dependencyArray ) => Fonksiyonun her renderda tekrardan olusturulmasini engeller ve bagimlilik olarak verilen parametrelerin degeri degismedigi sürece render islemi yapilmaz.

useMemo( function , dependencyArray ) => Yüksek performans gerektiren komplike isler yapan fonksiyonlarin sonucunu önbellege alir ve bagimlilik olarak verilen parametreler degismedigi sürece tekrar hesaplama yapilmaz.

memo()=> memo hooksu componentin propsu degismedigi sürece componenti tekrar render etmez. Bu da performans icin fayda saglar. Componentin ana fonsiyonu yazilirken yani // const Header = memo(function(){.... return <p>hallo</p>}) gibi veya export ederken
yani // export default memo(Header) seklinde kullanilabilir . Sadece büyük ve maliyetli bileşenleri veya sık sık gereksiz render olan bileşenleri memo() ile sarmak mantıklıdır.

lazy() ==> Componentleri lazy loading olarak yüklemek istediginde yani component sadece render edilme ihtiyaci duyuldugunda render edilmesini istediginde lazy fonksiyonunu import edip daha sonra en üstte diger importlari yaptigin yerde dinamik importla componentini import ederek layz loading yapabilirsin . // const LazyComponent = lazy(()=>import("src/components/LazyComponent"))

<Profiler> ==> Bir componentin kac defa render edildigini , renderin ne kadar sürdügünü ve neden render edildigini görmemizi saglar . bu bilgileri istersek consola yazabiliriz. // örnek:

```
 <Profiler
id="ToDoCreate"
onRender={(id, phase, actualDration, baseDuration,startTime,commitTime) =>console.log(id, phase, actualDration, baseDuration)} >
  <ToDoCreate />
</Profiler>
```
