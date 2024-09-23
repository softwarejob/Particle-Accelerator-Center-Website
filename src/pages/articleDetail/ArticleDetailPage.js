import React from 'react';
import MainLayout from "../../components/MainLayout";
import BreadCrumbs from "../../components/BreadCrumbs";

const breadCrumbsData = [
    {name: "Home", link:"/"},
    {name: "Research", link:"/research"},
    {name: "Publication Title", link:"/research/1"},
]

const ArticleDetailPage = () => {
    return (
        <MainLayout>
            <sectoin className="container mx-auto max-w-5xl flex flex-col px-5 py-5">
                <article className="flex-1">
                    <BreadCrumbs data={breadCrumbsData} />
                </article>
            </sectoin>
        </MainLayout>
    );
}

export default ArticleDetailPage;
