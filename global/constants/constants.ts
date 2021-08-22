import React, { useEffect, useState } from 'react'

const RESUME_FILE_NAME = 'SammyRPResume.pdf'

const constants = {
  urls: {
    LINKEDIN_URL: 'https://www.linkedin.com/in/sammy-robens-paradise/',
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
