import Head from "next/head";

export default function BoardsPage() {
  return (
    <>
      <Head>
        <meta property="og:title" content="sol 게시판" />
        <meta property="og:url" content="http://hansol.site/boards" />
        <meta
          property="og:image"
          content="https://cdn.crowdpic.net/list-thumb/thumb_l_F849A239E3EC8D949EB01552E25497E0.jpg"
        />
        <meta
          property="og:description"
          content="안녕하세요? 개린이 입니다만은"
        />
      </Head>
      <div>안녕하세요 게시판입니다.</div>
    </>
  );
}
