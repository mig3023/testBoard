import BaseLayout from "@/components/BaseLayout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <BaseLayout>
      <Head className='flex min-h-screen flex-col items-center justify-between p-24'>
        <Link href='/sign-in'>로그인 및 회원가입</Link>
      </Head>
      <div>
        <Link href='/create'>
          <button>글쓰기</button>
        </Link>
      </div>
    </BaseLayout>
  );
}
