import {FilesGenerator, FilesCompiler} from '@sitebud/sdk-lib';
import * as documents from './documents';

async function run(): Promise<void> {
    await new FilesGenerator()
        .withAdaptersDir('./src/adapters')
        .withDocuments(documents)
        .generate();
    await new FilesCompiler().fixDocuments();
}

run()
    .then(() => {
        console.log('DONE');
    })
    .catch(error => {
        console.error(error.message);
    });
