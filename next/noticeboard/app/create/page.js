"use client";

import BaseLayout from "@/components/BaseLayout";

export default function Create() {
  return (
    <BaseLayout>
      <h1>글쓰기</h1>

      <form>
        <div>
          <input className='border-b w-full' />
        </div>

        <div>
          <textarea className='border-b w-full'></textarea>
        </div>
      </form>
    </BaseLayout>
  );
}
