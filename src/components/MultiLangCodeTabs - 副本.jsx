import React from 'react';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';

export default function MultiLangCodeTabs({ qtcpp, pyqt5, python, cpp, java, js, lua }) {
  return (
    <>
      {/* 👇 调小 Tabs 行高 */}
      <style dangerouslySetInnerHTML={{
        __html: `
          .tabs-container .tabs__item {
            padding-top: 0.25rem;
            padding-bottom: 0.25rem;
            font-size: 0.875rem;
          }
        `
      }} />

      <Tabs
        groupId="language"
        defaultValue="python"
        values={[
          { label: 'Qt C++',    value: 'qtcpp'  },
          { label: 'PyQt5',     value: 'pyqt5'  },
          { label: 'Python',    value: 'python' },
          { label: 'C++',       value: 'cpp'    },
          { label: 'Java',      value: 'java'   },
          { label: 'JavaScript',value: 'js'     },
          { label: 'Lua',       value: 'lua'    },
        ]}>
        <TabItem value="qtcpp">
          <CodeBlock language="cpp">{qtcpp}</CodeBlock>
        </TabItem>
        <TabItem value="pyqt5">
          <CodeBlock language="python">{pyqt5}</CodeBlock>
        </TabItem>
        <TabItem value="python">
          <CodeBlock language="python">{python}</CodeBlock>
        </TabItem>
        <TabItem value="cpp">
          <CodeBlock language="cpp">{cpp}</CodeBlock>
        </TabItem>
        <TabItem value="java">
          <CodeBlock language="java">{java}</CodeBlock>
        </TabItem>
        <TabItem value="js">
          <CodeBlock language="javascript">{js}</CodeBlock>
        </TabItem>
        <TabItem value="lua">
          <CodeBlock language="lua">{lua}</CodeBlock>
        </TabItem>
      </Tabs>
    </>
  );
}