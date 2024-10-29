<template>
  <UCard>
    <template #header>
      <h2 class="text-xl font-semibold">Invoices</h2>
    </template>

    <!-- Outstanding -->
    <UCard class="mt-4">
      <template #header>
        <div class="flex items-center justify-between">
          <h3 class="text-lg font-semibold">Outstanding</h3>
          <UButton color="primary" icon="carbon:purchase">Pay Now</UButton>
        </div>
      </template>

      <UTable
        :rows="invoiceData.filter((row) => row.status === 'Outstanding')"
        :columns="columns"
      >
        <template #actions-data="{ row }">
          <UDropdown :items="items(row)">
            <UButton
              color="gray"
              variant="ghost"
              icon="i-heroicons-ellipsis-horizontal-20-solid"
            />
          </UDropdown>
        </template>
      </UTable>
    </UCard>

    <!-- Paid -->
    <UCard class="mt-4">
      <template #header>
        <h3 class="text-lg font-semibold">Paid</h3>
      </template>

      <UTable
        :rows="invoiceData.filter((row) => row.status === 'Paid')"
        :columns="columns"
      >
        <template #actions-data="{ row }">
          <UDropdown :items="items(row)">
            <UButton
              color="gray"
              variant="ghost"
              icon="i-heroicons-ellipsis-horizontal-20-solid"
            />
          </UDropdown>
        </template>
      </UTable>
    </UCard>
  </UCard>
</template>

<script setup lang="ts">
import UTable from "#ui/components/data/Table.vue";

interface InvoiceData {
  id: string;
  date: string;
  amount: number;
  status: string;
}

const columns: InstanceType<typeof UTable>["columns"] = [
  {
    key: "id",
    label: "ID",
  },
  {
    key: "date",
    label: "Date",
    sortable: true,
    direction: "desc",
  },
  {
    key: "amount",
    label: "Amount",
    sortable: true,
  },
  {
    key: "status",
    label: "Status",
    sortable: true,
  },
  {
    key: "actions",
  },
];

const invoiceData: InvoiceData[] = [
  {
    id: "1",
    date: "2021-01-01",
    amount: 500,
    status: "Paid",
  },
  {
    id: "2",
    date: "2021-02-01",
    amount: 600,
    status: "Paid",
  },
  {
    id: "3",
    date: "2021-03-01",
    amount: 300,
    status: "Paid",
  },
  {
    id: "4",
    date: "2021-04-01",
    amount: 200,
    status: "Paid",
  },
  {
    id: "5",
    date: "2021-05-01",
    amount: 500,
    status: "Outstanding",
  },
].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

const items = (row: InvoiceData) => [
  [
    {
      label: "Edit",
      icon: "i-heroicons-pencil-square-20-solid",
      click: () => console.log("Edit", row.id),
    },
    {
      label: "Duplicate",
      icon: "i-heroicons-document-duplicate-20-solid",
    },
  ],
  [
    {
      label: "Archive",
      icon: "i-heroicons-archive-box-20-solid",
    },
    {
      label: "Move",
      icon: "i-heroicons-arrow-right-circle-20-solid",
    },
  ],
  [
    {
      label: "Delete",
      icon: "i-heroicons-trash-20-solid",
    },
  ],
];
</script>
