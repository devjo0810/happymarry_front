<template>
    <div class="notice-page">
        <b-container class="notice-wrap">
            <h3 class="title">공지사항</h3>
            <b-table
                class="notice-table"
                striped hover
                :items="items"
                :fields="fields"
            ></b-table>
        </b-container>
    </div>
</template>
<script>
const SAMPLES = [
    { no: 40, title: 'Dickerson', count: 'Macdonald' },
    { no: 21, title: 'Larsen', count: 'Shaw' },
    { no: 89, title: 'Geneva', count: 'Wilson' },
    { no: 38, title: 'Jami', count: 'Carney' },
    { no: 40, title: 'Dickerson', count: 'Macdonald' },
    { no: 21, title: 'Larsen', count: 'Shaw' },
    { no: 89, title: 'Geneva', count: 'Wilson' },
    { no: 38, title: 'Jami', count: 'Carney' },
    { no: 40, title: 'Dickerson', count: 'Macdonald' },
    { no: 21, title: 'Larsen', count: 'Shaw' },
    { no: 89, title: 'Geneva', count: 'Wilson' },
    { no: 38, title: 'Jami', count: 'Carney' },
];

const TABLE_FIELDS = [
    {
        key: 'no',
        label: 'No.'
    },
    {
        key: 'title',
        label: '제목'
    },
    {
        key: 'count',
        label: '조회수'
    }
];

export default {
    name: 'NoticePage',
    data: () => ({
        items: SAMPLES,
        fields: TABLE_FIELDS
    }),

}
</script>