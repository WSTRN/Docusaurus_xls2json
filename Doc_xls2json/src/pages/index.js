import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';


function Generate() {
	var url = "http://121.37.234.56:3001/convert/";
	var xmlhttp = new XMLHttpRequest();
	var formData = new FormData();
	formData.append("file", document.getElementById("file").files[0]);


	xmlhttp.open("POST", url, true);
	xmlhttp.send(formData);
	xmlhttp.onload = function (e) {
    	if (this.status == 200) {
			//document.getElementById("response").innerHTML = "<h2>Loading...</h2>";
			var blob = new Blob([this.response], {type: "application/vnd.ms-excel"});
			console.log(blob);
			var link = document.createElement('a');
			var urltmp = URL.createObjectURL(blob);
			link.href = urltmp;
			link.download = "Recipe.json";
			document.body.appendChild(link);
			link.click();
			document.body.removeChild(link);
    	}
	};

}

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <button
            className="button button--secondary button--lg"
            onClick={()=> Generate()}>
            Docusaurus Tutorial - 5min ⏱️
          </button>
	  	  <input className="button button--secondary button--lg" type="file" id="file" name="file" />
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
