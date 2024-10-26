1. First install framer motion (npm i framer motion )
2. import motion element and use <motion.h2>   <motion.h2/>
3. animate = {{    }} 
fontSize , color , x , y  , scale , opacity , rotate  , originX , pathLength

4. initial = {{ }}
5. transition = {{  }}  delay ,  duration   type         stiffness(can be used for type=spring)

6. whileHover  ( textshadow , boxshadow
7. variants = {containervariants}

const containervariants = {
hidden:{
}
visible:{
}
}

8. keframes  -    scale: [ 0,1,2,0 ]
9. transition : yoyo:10 (10 keyframes)
yoyo: Infinity (Infinite keyframes)

10. to animate something out of dom we use animate presence
you can use exit property to exit the component 

For animating routes
First surround routes with animate presence 
then use useLocation 

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence exitBeforeEnter>
      <Route
        exact
        path="/"
        render={() => (
          <Home key="home" />
        )}
      />
      <Route
        exact
        path="/about"
        render={() => (
          <About key="about" />
        )}
      />
    </AnimatePresence>
  );
};


const App = () => (
  <Router>
    <AnimatedRoutes />
  </Router>
);

export default App;


11. exit = { x: -100 , transition:  { ease: 'easiInOut'}  } 
12. drag and dragConstraints  , dragElastic
13. whileInView property  --- For scroll on view animations
14. viewport = {{ once :true }}
15. mode={'wait'}