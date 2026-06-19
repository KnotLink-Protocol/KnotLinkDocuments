import React from 'react';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';

export default function CodeExampleTemplate({ python, javascript, java }) {
  return (
    <>
      {/* 👇 调小 Tabs 行高 */}
      <style dangerouslySetInnerHTML={{
        __html: `
          .tabs-container .tabs__item {
            padding-top: 0.25rem;    /* 原来大概是 0.75rem */
            padding-bottom: 0.25rem; /* 原来大概是 0.75rem */
            font-size: 0.875rem;     /* 可选：字号也可以稍微小一点 */
          }
        `
      }} />

      <Tabs
        groupId="language"
        defaultValue="python"
        values={[
          { label: 'Python', value: 'python' },
          { label: 'JavaScript', value: 'javascript' },
          { label: 'Java', value: 'java' },
        ]}>
        <TabItem value="python">
          <CodeBlock language="python">{python}</CodeBlock>
        </TabItem>
        <TabItem value="javascript">
          <CodeBlock language="javascript">{javascript}</CodeBlock>
        </TabItem>
        <TabItem value="java">
          <CodeBlock language="java">{java}</CodeBlock>
        </TabItem>
      </Tabs>
    </>
  );
}