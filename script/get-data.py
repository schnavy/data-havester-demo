from datasets import load_dataset

train_dataset = load_dataset("laion/laion2B-multi-joined-translated-to-en", split="train[:10]")
print(train_dataset[0])


for example in train_dataset:
    print(example)
    # Add a break or condition if needed to stop after a certain number of samples
    break