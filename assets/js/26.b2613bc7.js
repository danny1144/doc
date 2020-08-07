(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{381:function(a,s,t){"use strict";t.r(s);var r=t(1),e=Object(r.a)({},(function(){var a=this.$createElement;this._self._c;return this._m(0)}),[function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("div",{staticClass:"content"},[t("h2",{attrs:{id:"jvm"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#jvm"}},[a._v("#")]),a._v(" jvm")]),a._v(" "),t("h3",{attrs:{id:"jvm实例和jvm执行引擎实例"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#jvm实例和jvm执行引擎实例"}},[a._v("#")]),a._v(" JVM实例和JVM执行引擎实例")]),a._v(" "),t("p",[a._v("JVM实例对应了一个独立运行的java程序，而JVM执行引擎实例则对应了属于用户运行程序的线程；也就是JVM实例是进程级别，而执行引擎是线程级别的。")]),a._v(" "),t("h3",{attrs:{id:"jvm的基本结构"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#jvm的基本结构"}},[a._v("#")]),a._v(" JVM的基本结构")]),a._v(" "),t("p",[t("img",{attrs:{src:"http://static.bookstack.cn/projects/chinageek-jvm/source/jvm_system.png",alt:"PNG"}})]),a._v(" "),t("h3",{attrs:{id:"类加载子系统"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#类加载子系统"}},[a._v("#")]),a._v(" 类加载子系统")]),a._v(" "),t("p",[a._v("JVM的类加载是通过ClassLoader及其子类来完成的，类的层次关系和加载顺序可以由下图来描述：")]),a._v(" "),t("p",[t("img",{attrs:{src:"http://static.bookstack.cn/projects/chinageek-jvm/source/classload.png",alt:"PNG"}})]),a._v(" "),t("ol",[t("li",[a._v("Bootstrap ClassLoader负责加载$JAVA_HOME/jre/lib里所有的类库到内存，Bootstrap ClassLoader是JVM级别的，由C++实现，不是ClassLoader的子类，开发者也无法直接获取到启动类加载器的引用，所以不允许直接通过引用进行操作。")]),a._v(" "),t("li",[a._v("Extension ClassLoader负责加载java平台中扩展功能的一些jar包，主要是由 sun.misc.Launcher$ExtClassLoader实现的，是一个java类，继承自URLClassLoader超类。它将负责%JRE_HOME/lib/ext目录下的jar和class加载到内存，开发者可以直接使用该加载器。")]),a._v(" "),t("li",[a._v("App ClassLoader负责加载环境变量classpath中指定的jar包及目录中class到内存中，开发者也可以直接使用系统类加载器。")]),a._v(" "),t("li",[a._v("Custom ClassLoader属于应用程序根据自身需要自定义的ClassLoader(一般为java.lang.ClassLoader的子类)在程序运行期间，通过java.lang.ClassLoader的子类动态加载class文件，体现java动态实时类装入特性，如tomcat、jboss都会根据j2ee规范自行实现ClassLoader。自定义ClassLoader在某些应用场景还是比较适用，特别是需要灵活地动态加载class的时候。")])]),a._v(" "),t("h1",{attrs:{id:"内存模型"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#内存模型"}},[a._v("#")]),a._v(" 内存模型")]),a._v(" "),t("p",[t("img",{attrs:{src:"http://static.bookstack.cn/projects/chinageek-jvm/source/jvm.png",alt:"PNG"}})])])}],!1,null,null,null);s.default=e.exports}}]);