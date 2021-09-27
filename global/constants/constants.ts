import { useEffect, useState } from 'react'

export const RESUME_FILE_NAME = 'SammyRPResume.pdf'

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
    GITHUB_REPO_URL: 'https://github.com/SammyRobensParadise/Portfolio'
  }
}
export default constants
