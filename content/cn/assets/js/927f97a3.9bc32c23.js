"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[30565],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>h});var o=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,o,i=function(e,t){if(null==e)return{};var a,o,i={},n=Object.keys(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=o.createContext({}),p=function(e){var t=o.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},d=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},c=o.forwardRef((function(e,t){var a=e.components,i=e.mdxType,n=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=p(a),h=i,m=c["".concat(l,".").concat(h)]||c[h]||u[h]||n;return a?o.createElement(m,r(r({ref:t},d),{},{components:a})):o.createElement(m,r({ref:t},d))}));function h(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=a.length,r=new Array(n);r[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var p=2;p<n;p++)r[p]=a[p];return o.createElement.apply(null,r)}return o.createElement.apply(null,a)}c.displayName="MDXCreateElement"},583:(e,t,a)=>{a.r(t),a.d(t,{contentTitle:()=>r,default:()=>d,frontMatter:()=>n,metadata:()=>s,toc:()=>l});var o=a(87462),i=(a(67294),a(3905));const n={title:"Bootstrapping",keywords:["hudi","migration","use case"],summary:"In this page, we will discuss some available tools for migrating your existing table into a Hudi table",last_modified_at:new Date("2019-12-30T19:59:57.000Z")},r=void 0,s={unversionedId:"migration_guide",id:"version-0.12.1/migration_guide",title:"Bootstrapping",description:"Hudi maintains metadata such as commit timeline and indexes to manage a table. The commit timelines helps to understand the actions happening on a table as well as the current state of a table. Indexes are used by Hudi to maintain a record key to file id mapping to efficiently locate a record. At the moment, Hudi supports writing only parquet columnar formats.",source:"@site/versioned_docs/version-0.12.1/migration_guide.md",sourceDirName:".",slug:"/migration_guide",permalink:"/cn/docs/migration_guide",editUrl:"https://github.com/apache/hudi/tree/asf-site/website/versioned_docs/version-0.12.1/migration_guide.md",tags:[],version:"0.12.1",frontMatter:{title:"Bootstrapping",keywords:["hudi","migration","use case"],summary:"In this page, we will discuss some available tools for migrating your existing table into a Hudi table",last_modified_at:"2019-12-30T19:59:57.000Z"},sidebar:"docs",previous:{title:"Google BigQuery",permalink:"/cn/docs/gcp_bigquery"},next:{title:"Compaction",permalink:"/cn/docs/compaction"}},l=[{value:"Approaches",id:"approaches",children:[{value:"Use Hudi for new partitions alone",id:"use-hudi-for-new-partitions-alone",children:[],level:3},{value:"Convert existing table to Hudi",id:"convert-existing-table-to-hudi",children:[],level:3}],level:2}],p={toc:l};function d(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,o.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Hudi maintains metadata such as commit timeline and indexes to manage a table. The commit timelines helps to understand the actions happening on a table as well as the current state of a table. Indexes are used by Hudi to maintain a record key to file id mapping to efficiently locate a record. At the moment, Hudi supports writing only parquet columnar formats.\nTo be able to start using Hudi for your existing table, you will need to migrate your existing table into a Hudi managed table. There are a couple of ways to achieve this."),(0,i.kt)("h2",{id:"approaches"},"Approaches"),(0,i.kt)("h3",{id:"use-hudi-for-new-partitions-alone"},"Use Hudi for new partitions alone"),(0,i.kt)("p",null,"Hudi can be used to manage an existing table without affecting/altering the historical data already present in the\ntable. Hudi has been implemented to be compatible with such a mixed table with a caveat that either the complete\nHive partition is Hudi managed or not. Thus the lowest granularity at which Hudi manages a table is a Hive\npartition. Start using the datasource API or the WriteClient to write to the table and make sure you start writing\nto a new partition or convert your last N partitions into Hudi instead of the entire table. Note, since the historical\npartitions are not managed by HUDI, none of the primitives provided by HUDI work on the data in those partitions. More concretely, one cannot perform upserts or incremental pull on such older partitions not managed by the HUDI table.\nTake this approach if your table is an append only type of table and you do not expect to perform any updates to existing (or non Hudi managed) partitions."),(0,i.kt)("h3",{id:"convert-existing-table-to-hudi"},"Convert existing table to Hudi"),(0,i.kt)("p",null,"Import your existing table into a Hudi managed table. Since all the data is Hudi managed, none of the limitations\nof Approach 1 apply here. Updates spanning any partitions can be applied to this table and Hudi will efficiently\nmake the update available to queries. Note that not only do you get to use all Hudi primitives on this table,\nthere are other additional advantages of doing this. Hudi automatically manages file sizes of a Hudi managed table\n. You can define the desired file size when converting this table and Hudi will ensure it writes out files\nadhering to the config. It will also ensure that smaller files later get corrected by routing some new inserts into\nsmall files rather than writing new small ones thus maintaining the health of your cluster."),(0,i.kt)("p",null,"There are a few options when choosing this approach."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Option 1"),"\nUse the HoodieDeltaStreamer tool. HoodieDeltaStreamer supports bootstrap with --run-bootstrap command line option. There are two types of bootstrap,\nMETADATA_ONLY and FULL_RECORD. METADATA_ONLY will generate just skeleton base files with keys/footers, avoiding full cost of rewriting the dataset.\nFULL_RECORD will perform a full copy/rewrite of the data as a Hudi table."),(0,i.kt)("p",null,"Here is an example for running FULL_RECORD bootstrap and keeping hive style partition with HoodieDeltaStreamer."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"spark-submit --master local \\\n--conf 'spark.serializer=org.apache.spark.serializer.KryoSerializer' \\\n--class org.apache.hudi.utilities.deltastreamer.HoodieDeltaStreamer `ls packaging/hudi-utilities-bundle/target/hudi-utilities-bundle-*.jar` \\\n--run-bootstrap \\\n--target-base-path /tmp/hoodie/bootstrap_table \\\n--target-table bootstrap_table \\\n--table-type COPY_ON_WRITE \\\n--hoodie-conf hoodie.bootstrap.base.path=/tmp/source_table \\\n--hoodie-conf hoodie.datasource.write.recordkey.field=${KEY_FIELD} \\\n--hoodie-conf hoodie.datasource.write.partitionpath.field=${PARTITION_FIELD} \\\n--hoodie-conf hoodie.datasource.write.precombine.field=${PRECOMBINE_FILED} \\\n--hoodie-conf hoodie.bootstrap.keygen.class=org.apache.hudi.keygen.SimpleKeyGenerator \\\n--hoodie-conf hoodie.bootstrap.full.input.provider=org.apache.hudi.bootstrap.SparkParquetBootstrapDataProvider \\\n--hoodie-conf hoodie.bootstrap.mode.selector=org.apache.hudi.client.bootstrap.selector.BootstrapRegexModeSelector \\\n--hoodie-conf hoodie.bootstrap.mode.selector.regex.mode=FULL_RECORD \\\n--hoodie-conf hoodie.datasource.write.hive_style_partitioning=true\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Option 2"),"\nFor huge tables, this could be as simple as : "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'for partition in [list of partitions in source table] {\n        val inputDF = spark.read.format("any_input_format").load("partition_path")\n        inputDF.write.format("org.apache.hudi").option()....save("basePath")\n}\n')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Option 3"),"\nWrite your own custom logic of how to load an existing table into a Hudi managed one. Please read about the RDD API\n",(0,i.kt)("a",{parentName:"p",href:"/docs/quick-start-guide"},"here"),". Using the bootstrap run CLI. Once hudi has been built via ",(0,i.kt)("inlineCode",{parentName:"p"},"mvn clean install -DskipTests"),", the shell can be\nfired by via ",(0,i.kt)("inlineCode",{parentName:"p"},"cd hudi-cli && ./hudi-cli.sh"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"hudi->bootstrap run --srcPath /tmp/source_table --targetPath /tmp/hoodie/bootstrap_table --tableName bootstrap_table --tableType COPY_ON_WRITE --rowKeyField ${KEY_FIELD} --partitionPathField ${PARTITION_FIELD} --sparkMaster local --hoodieConfigs hoodie.datasource.write.hive_style_partitioning=true --selectorClass org.apache.hudi.client.bootstrap.selector.FullRecordBootstrapModeSelector\n")),(0,i.kt)("p",null,'Unlike deltaStream, FULL_RECORD or METADATA_ONLY is set with --selectorClass, see detalis with help "bootstrap run".'))}d.isMDXComponent=!0}}]);