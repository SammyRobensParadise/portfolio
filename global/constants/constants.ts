import React, { useEffect, useState } from 'react'

const RESUME_FILE_NAME = 'SammyRPResume.pdf'

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
    RESUME_URL: () => {
      const [resumeUrl, setResumeUrl] = useState<string>('#')
      useEffect(() => {
        if (typeof window !== 'undefined') {
          setResumeUrl(`${window.location.origin}/${RESUME_FILE_NAME}`)
        }
      })
      return resumeUrl
    }
  }
}
export default constants
