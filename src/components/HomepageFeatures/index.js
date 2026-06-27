import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    emoji: '⚡',
    title: '轻量通用协议',
    description: (
      <>
        KnotLink 基于 TCP 封装的 KLP 基础库，提供发布-订阅与询问-回复模式，
        让软件互联像调用本地函数一样简单。无需关心网络细节，只需实现功能。
      </>
    ),
  },
  {
    emoji: '🛠️',
    title: '自动生成工具链',
    description: (
      <>
        一份 <code>FuncList</code> JSON 描述文件，即可自动生成图形化测试页、
        接口文档、多语言 SDK、Blockly 代码块，甚至 MCP 桥接，让接入成本归零。
      </>
    ),
  },
  {
    emoji: '🧩',
    title: '无代码联动',
    description: (
      <>
        KnotHub 提供可视化节点管理与配方编排，拖拽即可实现多软件联动。
        AI Agent 也能无缝调用，让您的软件生态真正智能互联。
      </>
    ),
  },
];

function Feature({ emoji, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className={styles.featureCard}>
        <div className={styles.featureEmoji}>{emoji}</div>
        <Heading as="h3" className={styles.featureTitle}>{title}</Heading>
        <p className={styles.featureDescription}>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}