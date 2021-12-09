import { useEffect, useState } from 'react'

export const RESUME_FILE_NAME = 'SammyRPResume.pdf'
export const ENGINEERING_PAPER_SOURCE_CONTROL_NAME = 'SammyRPScmPaper.pdf'
export const ENGINEERING_PAPER_DESIGN_SYSTEM_NAME = 'SammyRPDesignPaper.pdf'

const constants = {
  urls: {
    /**
     * Linkedin URL as a string
     */
    LINKEDIN_URL: 'https://www.linkedin.com/in/sammy-robens-paradise/',
    /**
     *
     * @returns string link to the uploaded resume
     */
    RESUME_URL: (): string => {
      const [resumeUrl, setResumeUrl] = useState<string>('#')
      useEffect(() => {
        if (typeof window !== 'undefined') {
          setResumeUrl(`${window.location.origin}/${RESUME_FILE_NAME}`)
        }
      }, [setResumeUrl])
      return resumeUrl
    },
    GITHUB_REPO_URL: 'https://github.com/SammyRobensParadise/Portfolio',
    GITHUB_URL: 'https://github.com/SammyRobensParadise',
    DRIBBBLE_URL: 'https://dribbble.com/sammyrp',
    MEDIUM_URL: 'https://medium.com/@srobensparadise'
  }
}
export default constants
