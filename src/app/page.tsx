//  "use client";

import {  getQueryClient, trpc } from "@/trpc/server";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { Client } from "./Client";
import { Suspense } from "react";


const Page= async() =>{
  
 const queryClient=getQueryClient();
 void queryClient.prefetchQuery(trpc.CreateAI.queryOptions({text:"Onkar Prefetch"}))
  
  return(
  <HydrationBoundary state={dehydrate(queryClient)}>
    <Suspense fallback={<p>.Loading...</p>}>
  <Client></Client>
  </Suspense>
  </HydrationBoundary>);
}

export default Page;