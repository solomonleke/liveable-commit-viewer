import Head from 'next/head'
import Image from 'next/image'
import Logo from '../Components/Logo'
import NavText from '../Components/NavText'
import styles from '../styles/Home.module.css'
import { AiOutlineSearch } from "react-icons/ai";
import Button from '../Components/Button'
import SuggestedCard from '../Components/SuggestedCard'
import { useState } from 'react'
import CommitCard from '../Components/CommitCard'




export default function Home() {

  const [ShowCommit, setShowCommit] = useState(false)
  const [Loading, setLoading] = useState(false)
  const [SearchText, setSearchText] = useState("")


  const SearchBtn = ()=>{
    setShowCommit(true)
  }

  const SuggestBtn = (text)=>{
    setSearchText(text)
    setShowCommit(true)

    
  }
  return (
    <div>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </Head>

      {
        ShowCommit === false ? (
          <div className={`${styles.section} ${styles.wrapper}`}>
            <div className={styles.navbar}>
              <div className={styles.logo}>
                <Logo onClick={()=>setShowCommit(false)} />
              </div>
              <div className={styles.nav}>
                <NavText text="about" />
                <span className={styles.pl}> <NavText text="contact" /></span>
              </div>
            </div>

            <div className={styles.flex}>
              <div className={styles.header}>
                Discover the  world of code
              </div>
            </div>

            <div className={styles.flex}>
              <p className={styles.paraText}>Explore open source projects from GitHub,
                and read their commit history to see the story of how they were built.</p>
            </div>

            <div className={styles.searchGroup}>
              <div className={styles.inputGroup} >
                <div className={styles.searchIcon}>
                  <AiOutlineSearch />
                </div>
                <input className={styles.inputBox} value={SearchText} onChange={(e)=>setSearchText(e.target.value)} placeholder="E.g. facebook/react" />
              </div>
              <Button onClick={SearchBtn}>See Commits  </Button>

            </div>

            <p className={styles.suggestedText}>Or pick one of these suggested repos</p>

            <div className={styles.suggestedRow}>
              <SuggestedCard text={"django/django"} onClick={()=>SuggestBtn("django/django")} />
              <SuggestedCard text={"microsoft/vscode"} onClick={()=>SuggestBtn("microsoft/vscode")} />
              <SuggestedCard text={"jezen/is-thirteen"} onClick={()=>SuggestBtn("jezen/is-thirteen")} />
              <SuggestedCard text={"benawad/dogehouse"} onClick={()=>SuggestBtn("benawad/dogehouse")} />

            </div>
          </div>
        ) : (
          <div className={styles.section2}>

            <div className={styles.groupLayer}>
              <div className={styles.logoo}>
                <Logo onClick={()=>setShowCommit(false)} />
              </div>
              <div className={styles.inputGroup} >
                <div className={styles.searchIcon}>
                  <AiOutlineSearch />
                </div>
                <input className={styles.inputBox} value={SearchText} onChange={(e)=>setSearchText(e.target.value)} placeholder="E.g. facebook/react" />
              </div>
              <div className={styles.button}>

                <Button onClick={SearchBtn}>See Commits  </Button>
              </div>

            </div>

            <div className={styles.textCenter}>
              {SearchText}
            </div>
            {
              Loading && (
                <div className={styles.loadingText}>
                Loading...
              </div>
              )
            }
           


            <CommitCard/>
            <CommitCard/>
            <CommitCard/>
          </div>
        )
      }

      {
        // section 2
      }

    </div>
  )
}
