import React, { useState, useEffect } from 'react';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import { useLocation, useHistory } from '@docusaurus/router';

const LanguageSelector = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('python');
  const location = useLocation();
  const history = useHistory();

  useEffect(() => {
    const storedLanguage = localStorage.getItem('selectedLanguage');
    if (storedLanguage) {
      setSelectedLanguage(storedLanguage);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('selectedLanguage', selectedLanguage);
  }, [selectedLanguage]);

  const handleChange = (value) => {
    setSelectedLanguage(value);
    history.push(`/${value}${location.pathname}`);
  };

  return (
    <Tabs
      groupId="language"
      defaultValue={selectedLanguage}
      value={selectedLanguage}
      onChange={handleChange}
      values={[
        { label: 'Python', value: 'python' },
        { label: 'JavaScript', value: 'javascript' },
        { label: 'Java', value: 'java' },
      ]}>
      <TabItem value="python">全局语言 Python</TabItem>
      <TabItem value="javascript">全局语言 JavaScript</TabItem>
      <TabItem value="java">全局语言 Java</TabItem>
    </Tabs>
  );
};

export default LanguageSelector;